const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.clusterGroups.getAll);
router.get('/:id', isValidId, ctrl.clusterGroups.getById);
router.post('/', validate.clusterGroups.addSchema, ctrl.clusterGroups.add);
router.put('/:id', isValidId, validate.clusterGroups.addSchema, ctrl.clusterGroups.updateById);
router.delete('/:id', isValidId, ctrl.clusterGroups.removeById);

module.exports = router;
