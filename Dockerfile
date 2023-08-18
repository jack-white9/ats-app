FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm install -g typescript

COPY . .

CMD ["npm", "run", "build"]
