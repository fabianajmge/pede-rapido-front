FROM node
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli@13.2.0
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start