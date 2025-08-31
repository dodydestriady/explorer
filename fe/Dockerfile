FROM oven/bun:latest

WORKDIR /app

# Copy dependencies
COPY fe/package.json fe/bun.lockb* ./
RUN bun install

# Copy source files
COPY fe/src ./src
COPY fe/public ./public
COPY fe/index.html fe/vite.config.ts fe/tsconfig*.json ./

EXPOSE 3000
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0"]
