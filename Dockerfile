from node:20.9.0

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
CMD ["npm", "start"]