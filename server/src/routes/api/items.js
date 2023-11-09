const { Router } = require('express');

const ctrl = require('../../controllers');
const validateBody = require('../../validation');
const { authenticate, parse, isValidId } = require('../../middlewares');

const router = Router();

router.use(authenticate);

router.get('/', ctrl.items.getAll);
router.get('/:id', isValidId, ctrl.items.getById);
router.post('/', parse.json, validateBody.items.addItem, ctrl.items.add);
router.put('/:id', parse.json, isValidId, validateBody.items.addItem, ctrl.items.updateById);
router.patch('/:id', parse.json, isValidId, validateBody.items.addItem, ctrl.items.updateTitleById);
router.delete('/:id', isValidId, ctrl.items.deleteById);

module.exports = router;
