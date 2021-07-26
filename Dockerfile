FROM node:12

WORKDIR /apixel-website

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]