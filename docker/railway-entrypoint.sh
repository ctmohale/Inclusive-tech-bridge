#!/bin/sh
set -eu

php-fpm --daemonize
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
