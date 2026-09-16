# Inclusive Tech Bridge

Inclusive Tech Bridge is a React and Vite website for an accessibility-focused South African technology business. The site presents the company, its services, and accessible contact options for individuals, schools, businesses, and workplaces.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

Vite may select a different port when port 3000 is already in use; use the local URL shown in the terminal.

## Production build

```bash
npm run build
```

The production site is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

The project is configured for AWS Amplify using the repository-root [amplify.yml](./amplify.yml) file. Configure a `200` rewrite from `/<*>` to `/index.html` in Amplify so direct visits to React routes work. The generated output also includes `_redirects` and `.htaccess` fallbacks for compatible static and Apache hosts.

## Railway deployment

The root `Dockerfile` builds the React application and serves the resulting site with Caddy and PHP-FPM. It reads Railway's `PORT` variable automatically and keeps `/api/powermail.php` available.

Configure these runtime variables in Railway for the contact form:

- `POWERMAIL_API_KEY`
- `POWERMAIL_FROM_EMAIL`
- `POWERMAIL_ADMIN_EMAILS`

The API key must only be stored in Railway's Variables settings and must never be committed to this repository.

## cPanel contact form

The contact form posts JSON to `/api/powermail.php`. For cPanel/PHP hosting, upload the contents of `dist/` so `api/powermail.php` is inside `public_html`, then create this private config file outside `public_html`:

```php
<?php
return [
  'POWERMAIL_API_KEY' => 'YOUR_API_KEY',
  'POWERMAIL_FROM_EMAIL' => 'info@beestack.co.za',
  'POWERMAIL_ADMIN_EMAILS' => 'mohalebrown@gmail.com',
];
```

Place it at `../key-files/beestack-powermail.php` relative to `public_html`.
