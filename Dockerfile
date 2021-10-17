FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

#pass everything in dist folder (static resources) to web host

FROM nginx:1.15.8-alpine

#we pass our distributal artifact to Nginx to host
COPY --from=builder /usr/src/app/dist/movie-buddy/ /usr/share/nginx/html

