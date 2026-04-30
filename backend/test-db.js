require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

async function test() {
  console.log("Connecting to:", process.env.DATABASE_URL);
  try {
    const dbUrl = new URL(process.env.DATABASE_URL);
    console.log("Parsed URL:", {
      host: dbUrl.hostname,
      port: parseInt(dbUrl.port, 10) || 3306,
      user: dbUrl.username,
      password: dbUrl.password,
      database: dbUrl.pathname.slice(1)
    });
    const adapter = new PrismaMariaDb({
      host: dbUrl.hostname,
      port: parseInt(dbUrl.port, 10) || 3306,
      user: dbUrl.username,
      password: dbUrl.password,
      database: dbUrl.pathname.slice(1)
    });
    const prisma = new PrismaClient({ adapter });
    
    console.log("Calling $connect...");
    await prisma.$connect();
    console.log("Connected successfully!");
    
    console.log("Running a query...");
    const users = await prisma.user.findMany();
    console.log("Users:", users);
    
    await prisma.$disconnect();
    console.log("Done.");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

test();
