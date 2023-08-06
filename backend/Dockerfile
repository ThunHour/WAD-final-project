FROM node:16-alpine
WORKDIR /app
# COPY package.json and package-lock.json files
COPY package*.json ./
COPY ./backup ./backup
# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./.env

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000

# A command to start the server
CMD pnpm start