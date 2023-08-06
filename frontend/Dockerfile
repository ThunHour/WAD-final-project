FROM node:16-alpine as node-helper
WORKDIR /app
RUN npm cache clean --force
COPY . .
RUN npm install -g pnpm
RUN pnpm install

FROM nginx:1.20 as ngx
COPY --from=node-helper /app/dist/frontend /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
