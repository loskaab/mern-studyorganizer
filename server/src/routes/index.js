const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const clustersRouter = require('./api/clusters');
const clusterGroupsRouter = require('./api/clusterGroups');
const elementsRouter = require('./api/elements');
const elementGroupsRouter = require('./api/elementGroups');
const pingRouter = require('./api/ping');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/clusters', clustersRouter);
router.use('/clustergroups', clusterGroupsRouter);
router.use('/elements', elementsRouter);
router.use('/elementgroups', elementGroupsRouter);
// Prevent onrender.com from sleep (with https://console.cron-job.org)
router.use('/ping', pingRouter);

module.exports = router;
