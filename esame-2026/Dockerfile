FROM node:latest

WORKDIR /app

# Copia la build già fatta
COPY ./dist ./dist

# Espone la porta 4173
EXPOSE 4173

# Avvia il server di anteprima di Vite
CMD ["npx", "serve", "-s", "dist", "-l", "4173"]
