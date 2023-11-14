const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const elementsRouter = require('./api/elements');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/elements', elementsRouter);

module.exports = router;
