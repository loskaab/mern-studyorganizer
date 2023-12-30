const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.clusters.getAll);
router.get('/:id', isValidId, ctrl.clusters.getById);
router.post('/', validate.clusters.addSchema, ctrl.clusters.add);
router.patch('/:id', isValidId, validate.clusters.updateSchema, ctrl.clusters.updateById);
router.delete('/:id', isValidId, ctrl.clusters.removeById);

module.exports = router;
