FROM node:lts 

WORKDIR /usr/src/app
#COPY ./package.json /usr/src/app

RUN npm install -g npm
RUN npm install nodemon -g 
RUN npm upgrade
RUN npm install --save subscriptions-transport-ws