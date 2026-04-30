const userService = require('../services/userService');

/**
 * Auth middleware — decodes user token from Authorization header
 * Token format: Base64-encoded JSON { email, name, picture, sub, iat }
 * Attaches req.user = { id, email, name, image }
 */
async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = authHeader.slice(7);

  try {
    // Decode the base64-encoded user payload from the frontend
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));

    const email = decoded.email;
    if (!email) {
      return res.status(401).json({ error: 'Invalid token: no email' });
    }

    // Check token is not too old (24 hours max)
    if (decoded.iat) {
      const age = Math.floor(Date.now() / 1000) - decoded.iat;
      if (age > 86400) {
        return res.status(401).json({ error: 'Token expired' });
      }
    }

    // Find or create user in our DB
    const user = await userService.findOrCreateUser(
      email,
      decoded.name || '',
      decoded.picture || decoded.image || ''
    );

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authMiddleware;
