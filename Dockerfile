FROM node:latest as build
WORKDIR /app
COPY package*.json /app/
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
RUN npm install -g ionic cordova
COPY ./ /app/
RUN npm run-script build
EXPOSE 4200
CMD ["npm", "run", "start"]
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY www/ /usr/share/nginx/html/
