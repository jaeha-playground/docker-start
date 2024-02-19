FROM node:20-alpine as builder
WORKDIR '/usr/src/app'
COPY package.json .
RUN yarn install
COPY ./ ./
RUN yarn run build

FROM nginx
COPY --from=builder /usr/src/app /usr/share/nginx/html