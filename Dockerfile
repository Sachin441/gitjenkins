FROM node:latest as build
# WORKDIR /app
# COPY package*.json /app/
# RUN npm config set registry http://registry.npmjs.org/
# RUN npm install
# RUN npm install -g ionic cordova
# COPY ./ /app/
# RUN npm run-script build
#docker build -t ionic_digilocker:10.2 .
# FROM nginx:alpine
# RUN rm -rf /usr/share/nginx/html/*
# COPY www/ /usr/share/nginx/html/
