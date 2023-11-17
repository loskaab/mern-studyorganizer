const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const clustersRouter = require('./api/clusters');
const elementsRouter = require('./api/elements');

router.use('/auth', authRouter);
router.use('/clusters', clustersRouter);
router.use('/elements', elementsRouter);
router.use('/users', usersRouter);

module.exports = router;
