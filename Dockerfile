# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# ENTRYPOINT ["tail", "-f", "/dev/null"]

CMD ["node", "server/index.js"]