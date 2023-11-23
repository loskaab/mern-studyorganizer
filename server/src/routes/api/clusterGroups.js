const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/groups', ctrl.clusterGroups.getAll);
router.get('/groups/:id', isValidId, ctrl.clusterGroups.getById);
router.post('/groups', validate.clusterGroups.addSchema, ctrl.clusterGroups.add);
router.put('/groups/:id', isValidId, validate.clusterGroups.addSchema, ctrl.clusterGroups.updateById);
router.delete('/groups/:id', isValidId, ctrl.clusterGroups.removeById);

module.exports = router;
