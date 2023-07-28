const { Router } = require('express');

const ctrl = require('../controllers');
const schemas = require('../validation');
const { jsonParser, authenticate } = require('../middlewares');

const router = Router();

router.use(jsonParser);

router.post('/register', schemas.user.register, ctrl.auth.register);
router.post('/login', schemas.user.register, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);

module.exports = router;
