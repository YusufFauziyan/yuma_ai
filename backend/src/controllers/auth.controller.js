const authService = require('../services/auth.service');

/**
 * POST /api/auth/sync-user
 * Syncs an authenticated user from NextAuth to the backend database
 */
async function syncUser(req, res) {
  try {
    const { email, name, image } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await authService.syncUser(email, name || '', image || '');

    res.status(200).json({ user });
  } catch (error) {
    console.error('Failed to sync user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  syncUser,
};
