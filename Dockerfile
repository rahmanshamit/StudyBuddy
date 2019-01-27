FROM node:8-slim

WORKDIR /starter
ENV NODE_ENV development
ENV MONGODB_URI mongodb://study-buddy:2xuVDrDNrE5KwiFE0VzKDBPQMYxKcf4hd5b1WIQttKAZI9ajtwmBsTyK32fqAq3MFq4wxyJEOfc3e36D0VjLiw==@study-buddy.documents.azure.com:10255/?ssl=true&replicaSet=globaldb&appname=@Canada Central
COPY package.json /starter/package.json

RUN npm install --production

COPY .env.example /starter/.env.example
COPY . /starter

CMD ["npm","start"]


EXPOSE 8080
