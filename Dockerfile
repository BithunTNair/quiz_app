FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY  --from=builder /app/dist ./dist

EXPOSE 5173

CMD [ "serve","-s","dist" ,"-l","5173"]



