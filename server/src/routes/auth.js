const { Router } = require('express');

const ctrl = require('../controllers');
const validateBody = require('../validation');
const { authenticate, parse } = require('../middlewares');

const router = Router();

router.post('/register', parse.json, validateBody.user.register, ctrl.auth.register);
router.post('/login', parse.json, validateBody.user.login, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);

module.exports = router;
