FROM finizco/nginx-node AS core

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

FROM core as builder
RUN npm install 
RUN npm run build

FROM nginx:1.19.3 as static
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
