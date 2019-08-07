FROM node:10-alpine

WORKDIR /app
COPY . .

EXPOSE 8081

ENTRYPOINT ["node","address.js"]