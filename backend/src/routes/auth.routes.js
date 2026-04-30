const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

// Sync user from NextAuth
router.post('/sync-user', authController.syncUser);

module.exports = router;
