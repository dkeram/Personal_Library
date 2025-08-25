# Dockerfile (frontend)
FROM node:18-slim as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source & build
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]