# FROM --platform=linux/amd64 node:23 as build

FROM node:23 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:23-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

RUN npm install --production

EXPOSE 5174

CMD ["npx", "serve", "-s", "dist", "-l", "5174"]