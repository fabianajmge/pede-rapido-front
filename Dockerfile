FROM node:latest as angular
#WORKDIR /usr/local/app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/pede-rapido /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t uipederapido .
#docker run -p 8081:80 uipederapido

#docker-compose -f "docker-compose.yml" up -d --build