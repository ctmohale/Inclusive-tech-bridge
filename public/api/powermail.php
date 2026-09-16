<?php
declare(strict_types=1);

const POWERMAIL_BASE_URL = 'https://powermail.beestack.co.za/api';

function config_value(string $key, string $fallback = ''): string {
    $configPath = dirname(__DIR__, 2) . '/key-files/beestack-powermail.php';
    $config = is_file($configPath) ? require $configPath : [];

    $value = getenv($key);
    if ($value === false || trim($value) === '') {
        $value = $config[$key] ?? $fallback;
    }

    return trim((string) $value);
}

function json_response(int $status, array $payload): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function clean(mixed $value): string {
    return trim((string) ($value ?? ''));
}

function is_email(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function api_key(): string {
    $key = config_value('POWERMAIL_API_KEY');
    if ($key === '') {
        json_response(500, ['error' => 'POWERMAIL_API_KEY is not configured']);
    }

    return $key;
}

function powermail(string $path, string $method = 'GET', ?array $payload = null): array {
    $key = api_key();
    $headers = ['Authorization: Bearer ' . $key];
    $url = rtrim(POWERMAIL_BASE_URL, '/') . '/' . ltrim($path, '/');

    $ch = curl_init($url);
    $options = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_HTTPHEADER => $headers,
    ];

    if ($method === 'POST') {
        $headers[] = 'Content-Type: application/json';
        $options[CURLOPT_POST] = true;
        $options[CURLOPT_POSTFIELDS] = json_encode($payload ?? []);
        $options[CURLOPT_HTTPHEADER] = $headers;
    }

    curl_setopt_array($ch, $options);
    $body = curl_exec($ch);
    $error = curl_error($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    if ($body === false) {
        throw new RuntimeException($error ?: 'Powermail request failed');
    }

    $data = json_decode((string) $body, true);
    $data = is_array($data) ? $data : ['raw' => (string) $body];

    if ($status < 200 || $status >= 300) {
        throw new RuntimeException($data['error'] ?? $data['message'] ?? 'Powermail request failed');
    }

    return $data;
}

function active_template_key(): string {
    $response = powermail('templates');
    $templates = $response['data'] ?? $response['templates'] ?? $response;

    if (!is_array($templates)) {
        throw new RuntimeException('No templates returned from Powermail');
    }

    foreach ($templates as $template) {
        if (!is_array($template)) {
            continue;
        }

        if (($template['active'] ?? true) === false) {
            continue;
        }

        $key = clean($template['key'] ?? $template['template_key'] ?? $template['slug'] ?? '');
        if ($key !== '') {
            return $key;
        }
    }

    throw new RuntimeException('No active Powermail template found');
}

function read_body(): array {
    $payload = json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($payload)) {
        json_response(400, ['error' => 'Invalid JSON body']);
    }

    return $payload;
}

function send_email(string $to, string $name, string $body): array {
    if (!is_email($to)) {
        json_response(422, ['error' => 'Valid recipient email required']);
    }

    return powermail('send', 'POST', [
        'from_email' => config_value('POWERMAIL_FROM_EMAIL', 'info@beestack.co.za'),
        'to' => $to,
        'template_key' => active_template_key(),
        'data' => [
            'name' => $name,
            'body' => $body,
        ],
    ]);
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        json_response(200, powermail($_GET['action'] ?? 'templates'));
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(405, ['error' => 'Method not allowed']);
    }

    $payload = read_body();

    $name = clean($payload['name'] ?? $payload['fullName'] ?? '');
    $email = clean($payload['email'] ?? '');
    $phone = clean($payload['phone'] ?? '');
    $service = clean($payload['service'] ?? '');
    $message = clean($payload['message'] ?? $payload['description'] ?? '');

    if ($name === '' || !is_email($email) || $phone === '' || $message === '') {
        json_response(422, ['error' => 'Name, email, phone, and message are required']);
    }

    $body = implode("\n\n", array_filter([
        'Name: ' . $name,
        'Email: ' . $email,
        $phone ? 'Phone: ' . $phone : '',
        $service ? 'Service interested in: ' . $service : '',
        'Message:',
        $message,
    ]));

    $adminEmails = array_filter(array_map('trim', explode(',', config_value('POWERMAIL_ADMIN_EMAILS', 'mohalebrown@gmail.com'))));
    if (count($adminEmails) === 0) {
        json_response(500, ['error' => 'POWERMAIL_ADMIN_EMAILS is not configured']);
    }

    $results = [];
    foreach ($adminEmails as $adminEmail) {
        $results[] = send_email($adminEmail, $name ?: 'Website visitor', $body);
    }

    json_response(200, ['sent' => true, 'result' => $results]);
} catch (Throwable $error) {
    json_response(502, ['error' => $error->getMessage()]);
}
