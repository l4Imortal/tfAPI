# Use uma imagem base do Node.js
FROM node:14

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do projeto
COPY . .

# Expor a porta
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]
