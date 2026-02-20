# Estágio 1: Instalação e Build
FROM node:22.14-alpine AS builder

WORKDIR /app

# Instala as dependências
COPY package*.json ./
RUN npm ci

# Copia o código fonte
COPY . .

# Variável de ambiente necessária para o build do Vite
ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY

# Gera os arquivos estáticos na pasta "dist"
RUN npm run build

# Estágio 2: Servidor Nginx (Muito mais leve e rápido)
FROM nginx:alpine

# Configuração essencial para rotas do React (evita erro 404 ao dar F5)
RUN echo 'server { \
    listen 5174; \
    location / { \
        root   /usr/share/nginx/html; \
        index  index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Remove arquivos padrão e copia o seu site compilado
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 5174 (O Easypanel vai transformar isso em HTTPS externamente)
EXPOSE 5174

CMD ["nginx", "-g", "daemon off;"]