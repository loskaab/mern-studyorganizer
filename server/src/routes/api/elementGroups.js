const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/groups', ctrl.elements.getAll);
router.get('/groups/:id', isValidId, ctrl.elements.getById);
router.post('/groups', validate.elements.addSchema, ctrl.elements.add);
router.put('/groups/:id', isValidId, validate.elements.addSchema, ctrl.elements.updateById);
router.delete('/groups/:id', isValidId, ctrl.elements.removeById);

module.exports = router;
