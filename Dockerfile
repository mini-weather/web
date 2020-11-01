FROM finizco/nginx-node AS core

WORKDIR /app

COPY package.json package-lock.json node_modules ./

COPY . .

FROM core as builder 
RUN npm run-script build

FROM nginx:1.19.3 as static
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
