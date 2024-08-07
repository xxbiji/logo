FROM nginx:latest

COPY ./ /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

CMD nginx -g "daemon off;"
