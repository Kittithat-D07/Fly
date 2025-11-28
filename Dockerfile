FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# เปิด port 7805
EXPOSE 7805

CMD ["node", "index.js"]
