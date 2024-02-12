# Paso 1: Utiliza una imagen de Node.js para construir tu aplicación Angular
FROM node:latest as build-step

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Construye la aplicación
RUN npm run build

# Paso 2: Utiliza una imagen de nginx para servir la aplicación
FROM nginx:alpine
COPY --from=build-step /app/dist/parqueadero /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
