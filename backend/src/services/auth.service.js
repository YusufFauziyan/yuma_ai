const prisma = require('../prisma/client');

/**
 * Sync user from NextAuth (frontend) to database
 */
async function syncUser(email, name, image) {
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      image
    },
    create: {
      email,
      name,
      image
    }
  });

  return user;
}

module.exports = {
  syncUser,
};
