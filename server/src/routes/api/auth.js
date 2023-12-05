const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate, passport } = require('../../middlewares');

const router = express.Router();

// Auth
router.post('/register', validate.users.registerSchema, ctrl.auth.register);
router.post('/login', validate.users.loginSchema, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);
router.get('/refresh', authenticate, ctrl.auth.getUser);

// Refresh token
router.post('/refresh', ctrl.auth.refreshToken);

// Verify email
router.post('/verify', validate.users.verifySchema, ctrl.auth.verifyEmail);

// Reset pass
router.post('/forgot', validate.users.forgotSchema, ctrl.auth.forgotPass);
router.post('/reset', validate.users.resetSchema, ctrl.auth.resetPass);

// Google auth
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/cb', passport.authenticate('google', { session: false }), ctrl.auth.google);

module.exports = router;
