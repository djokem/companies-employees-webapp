FROM alpine:latest

WORKDIR /usr/app

RUN apk add --update nodejs npm

COPY package*.json ./

RUN npm ci -qy

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
