FROM node:16

WORKDIR /usr/app

RUN yarn global add forever

COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

CMD ["forever", ".output/server/index.mjs"]