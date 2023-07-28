const { Router } = require('express');

const ctrl = require('../controllers');
const schemas = require('../validation');
const { jsonParser, authenticate, isValidId } = require('../middlewares');

const router = Router();

router.use(authenticate);

router.get('/', ctrl.items.getAll);
router.get('/:id', isValidId, ctrl.items.getById);
router.post('/', jsonParser, schemas.item.addItem, ctrl.items.add);
router.put('/:id', jsonParser, isValidId, schemas.item.addItem, ctrl.items.updateById);
router.patch('/:id', jsonParser, isValidId, schemas.item.addItem, ctrl.items.updateTitleById);
router.delete('/:id', isValidId, ctrl.items.removeById);

module.exports = router;
