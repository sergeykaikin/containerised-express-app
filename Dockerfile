FROM node:8

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install yarn -g
RUN yarn
RUN npm uninstall yarn -g

COPY . .
RUN npm run build 

CMD [ "node", "dist/index.js" ]