FROM node:24-bookworm-slim

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y \
    && apt-get install -y openssl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile \
# Ensure Prisma generates binaries for both the builder and the target environment
    && yarn prisma generate \
    && yarn run build

COPY . .

# Copy Prisma files for migrations
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

COPY --from=builder /app/dist ./

# For dev
# COPY --from=builder /app/.env ./

# Copy the entrypoint script
COPY --from=builder /app/docker-entrypoint.sh ./
RUN chmod +x /app/docker-entrypoint.sh

# Use ENTRYPOINT instead of CMD for proper signal handling
ENTRYPOINT ["/app/docker-entrypoint.sh"]