require('dotenv').config();

const express = require('express');
const cors = require('cors');
const prisma = require('./prisma/client');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

const allowedOrigins = [
  "http://localhost:3000",
  "https://yuma-ai-azure.vercel.app"
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ['X-Conversation-Id']
};

// Middleware
app.use(cors(corsOptions));

// Preflight requests
app.options("*", cors(corsOptions));

app.use(express.json());

// Routes
app.use('/api', chatRoutes);

// Health check (no auth needed)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Sync user endpoint via Auth Routes
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Start server with Prisma connection
async function main() {
  await prisma.$connect();
  console.log('📦 Database connected (MySQL via Prisma)');

  app.listen(PORT, () => {
    console.log(`\n🚀 Yuma AI Backend running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints:`);
    console.log(`   POST   /api/chat`);
    console.log(`   GET    /api/conversations`);
    console.log(`   POST   /api/conversations`);
    console.log(`   GET    /api/conversations/:id`);
    console.log(`   DELETE /api/conversations/:id\n`);
  });
}

main().catch((e) => {
  console.error('❌ Failed to start server:', e);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
