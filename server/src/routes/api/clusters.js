const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.clusters.getAll);
router.get('/:id', isValidId, ctrl.clusters.getById);
router.post('/', validate.clusters.addSchema, ctrl.clusters.add);
router.put('/:id', isValidId, validate.clusters.addSchema, ctrl.clusters.updateById);
router.patch(
  '/favorite/:id',
  isValidId,
  validate.clusters.updateFavoriteSchema,
  ctrl.clusters.updateFavoriteById,
);
router.delete('/:id', isValidId, ctrl.clusters.removeById);

module.exports = router;
