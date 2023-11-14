const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.elements.getAll);
router.get('/:id', isValidId, ctrl.elements.getById);
router.post('/', validate.elements.addSchema, ctrl.elements.add);
router.put('/:id', isValidId, validate.elements.addSchema, ctrl.elements.updateById);
router.patch(
  '/:id/favorite',
  isValidId,
  validate.elements.updateFavoriteSchema,
  ctrl.elements.updateFavoriteById,
);
router.delete('/:id', isValidId, ctrl.elements.removeById);

module.exports = router;
