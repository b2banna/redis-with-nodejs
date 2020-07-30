FROM node:alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean -f
COPY . .
CMD ["npm","start"]