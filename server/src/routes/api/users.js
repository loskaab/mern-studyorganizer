const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/current', ctrl.users.getProfile);

router.patch(
  '/update',
  upload.single('avatar'),
  validate.users.updateSchema,
  ctrl.users.updateProfile,
);
router.delete('/delete', ctrl.users.deleteProfile);

module.exports = router;
