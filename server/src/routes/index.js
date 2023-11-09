const { Router } = require('express');

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const itemsRouter = require('./api/items');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/items', itemsRouter);

module.exports = router;
