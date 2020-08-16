FROM node:12

WORKDIR /apixel-website

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["node", "index.js"]