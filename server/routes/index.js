const { Router } = require('express');

const authRouter = require('./auth');
const usersRouter = require('./users');
const itemsRouter = require('./items');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/items', itemsRouter);

module.exports = router;
