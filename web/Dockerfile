FROM node:latest
WORKDIR /banpu
COPY . /banpu
RUN npm install -g @vue/cli
RUN npm install
RUN npm run build

EXPOSE 3000