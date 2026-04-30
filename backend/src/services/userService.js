const prisma = require('../prisma/client');

/**
 * Find or create a user by email (upsert on login)
 */
async function findOrCreateUser(email, name, image) {
  const user = await prisma.user.upsert({
    where: { email },
    update: { name, image },
    create: { email, name, image },
  });

  return user;
}

/**
 * Get user by ID
 */
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

/**
 * Get user by email
 */
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

module.exports = {
  findOrCreateUser,
  getUserById,
  getUserByEmail,
};
