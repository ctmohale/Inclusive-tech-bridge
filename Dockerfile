FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM php:8.4-fpm-alpine AS runtime

RUN apk add --no-cache caddy

COPY --from=build /app/dist/ /srv/
COPY docker/Caddyfile /etc/caddy/Caddyfile
COPY docker/railway-entrypoint.sh /usr/local/bin/railway-entrypoint

RUN chmod +x /usr/local/bin/railway-entrypoint \
    && chown -R www-data:www-data /srv

EXPOSE 8080

ENTRYPOINT ["railway-entrypoint"]
