const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

/**
 * Prisma Client Singleton (Prisma 7 — Driver Adapter)
 *
 * Uses @prisma/adapter-mariadb for direct MySQL connection.
 * Prevents multiple PrismaClient instances during development
 * when nodemon restarts the server.
 */
const globalForPrisma = globalThis;

function createPrismaClient() {
  const url = process.env.DATABASE_URL;

  if (!url) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const dbUrl = new URL(url);

  const adapter = new PrismaMariaDb({
    host: dbUrl.hostname,
    port: parseInt(dbUrl.port, 10) || 3306,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), // Remove leading slash
    connectionLimit: 10,
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });
}

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;
