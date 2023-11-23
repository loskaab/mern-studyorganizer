const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const clustersRouter = require('./api/clusters');
const clusterGroupsRouter = require('./api/clusterGroups');
const elementsRouter = require('./api/elements');
const elementGroupsRouter = require('./api/elementGroups');

router.use('/auth', authRouter);
router.use('/clusters', clustersRouter);
router.use('/clusters/groups', clusterGroupsRouter);
router.use('/elements', elementsRouter);
router.use('/elements/groups', elementGroupsRouter);
router.use('/users', usersRouter);

module.exports = router;
