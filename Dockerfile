FROM node:lts-alpine3.13

RUN mkdir -p /home/api

RUN mkdir -p /home/api/node_modules

WORKDIR /home/api

COPY . .

RUN chown -R node:node .

USER node

RUN yarn

CMD [ "yarn", "start:dev" ]