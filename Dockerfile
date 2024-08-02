# stage1 - build react app first
FROM node:20.11-alpine as base

# Copy sources
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
COPY . /app

#FROM base as tester
#RUN npm run test

# Build project
FROM base as builder
RUN npm run build
ENV NODE_ENV=production

# Copy project
FROM nginx:1.25.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
