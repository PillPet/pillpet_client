FROM node:10.14

MAINTAINER PINOT. KIM. <pinot.kim@kakao.com>

# before install
RUN npm install -g yarn

# set workdir
WORKDIR /usr/src/app

COPY package*.json ./

# install def
RUN yarn

# move files
COPY . .

# port bind
EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
