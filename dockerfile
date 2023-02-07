FROM node as builder

ADD . .
RUN npm install
RUN npm run build

FROM nginx:alpine as prod
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder ./dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
