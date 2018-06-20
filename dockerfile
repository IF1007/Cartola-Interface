FROM node:latest
WORKDIR /app/interface
COPY . .

RUN npm install

CMD [ "npm","start" ]

EXPOSE 3000