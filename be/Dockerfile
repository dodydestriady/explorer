FROM oven/bun:latest

WORKDIR /app

COPY ./be/package.json ./
RUN apt-get update -y && apt-get install -y openssl
RUN bun install

COPY ./be/src src
COPY ./be/tsconfig.json ./
COPY ./be/prisma ./prisma

EXPOSE 4000

CMD ["sh", "-c", "bunx prisma migrate deploy && bun run src/scripts/seed.ts && bun run src/index.ts"]
