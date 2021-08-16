FROM node:14

WORKDIR /portfolio-website

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]