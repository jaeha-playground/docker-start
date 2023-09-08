FROM node:16-alpine as development

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

# If you are building your code for production
# RUN yarn ci --only=production
RUN yarn run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn ci --only=production

COPY --from=development /usr/src/app/dist ./dist

# EXPOSE 8080
CMD ["node", "dist/main.js"]