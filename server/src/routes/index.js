const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const clustersRouter = require('./api/clusters');
const clusterGroupsRouter = require('./api/clusterGroups');
const elementsRouter = require('./api/elements');
const elementGroupsRouter = require('./api/elementGroups');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/clusters', clustersRouter);
router.use('/clustergroups', clusterGroupsRouter);
router.use('/elements', elementsRouter);
router.use('/elementgroups', elementGroupsRouter);
router.use('/ping', (req, res) => {
  res.status(200).json({ message: 'It is alive' });
});

module.exports = router;
