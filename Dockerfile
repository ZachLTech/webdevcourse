FROM node:latest

COPY ./app /app

WORKDIR /app

RUN npm install

RUN npm audit fix

EXPOSE 3000

CMD ["/bin/bash", "-c", "npx nuxt build;node .output/server/index.mjs"]