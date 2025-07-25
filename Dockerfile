FROM node:24-bookworm-slim AS builder

WORKDIR /app
COPY package*.json ./

# Install OpenSSL for Prisma
RUN apt-get update -y \
&& apt-get install -y openssl \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

RUN npm install
COPY . .

# Build the Prisma Client & TypeScript files
RUN npx prisma generate && npm run build-js

# For dev
# COPY --from=builder /app/.env ./

# Copy the entrypoint script
RUN chmod +x /app/docker-entrypoint.sh

# Use ENTRYPOINT instead of CMD for proper signal handling
ENTRYPOINT ["/app/docker-entrypoint.sh"]