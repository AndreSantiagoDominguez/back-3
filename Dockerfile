# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json y lockfile
COPY package*.json ./

# Instalar TODAS las dependencias necesarias para NestJS (incluye test modules)
RUN npm install @nestjs/common @nestjs/core @nestjs/testing reflect-metadata rxjs supertest @types/supertest @types/jest --save-dev
RUN npm ci

# Copiar el código fuente
COPY . .

# Compilar NestJS
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./

# Solo dependencias de producción
RUN npm ci --omit=dev

# Copiar build final
COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "dist/main.js"]
