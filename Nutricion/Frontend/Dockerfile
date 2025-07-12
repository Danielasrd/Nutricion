# Nutricion/Frontend/Dockerfile
# Primera etapa: Construir la aplicación Vite
# Usamos Node.js 20 para construir el frontend
FROM node:20-alpine as builder 

WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación Vite para producción
RUN npm run build

# Segunda etapa: Servir la aplicación estática con Nginx
FROM nginx:alpine

# Copiar la configuración de Nginx
# Este archivo nginx.conf debe estar en la misma carpeta que este Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de construcción de Vite al servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx servirá la aplicación

# Nginx por defecto sirve en el puerto 80
EXPOSE 80 

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
