const { Router } = require('express');

const ctrl = require('../controllers');
const validateBody = require('../validation');
const { authenticate, parse, upload } = require('../middlewares');

const router = Router();

router.get('/current', authenticate, ctrl.users.getCurrent);
router.post('/verify', parse.json, validateBody.users.verifyEmail, ctrl.users.verifyEmail);
router.patch('/avatar', parse.json, authenticate, upload.single('avatar'), ctrl.users.updateAvatar);
router.delete('/current', authenticate, ctrl.users.deleteCurrent);

router.get('/feedback', ctrl.users.renderFeedbackHtml);
router.post(
  '/feedback',
  parse.urlencoded,
  validateBody.users.sendFeedback,
  ctrl.users.sendFeedback,
);

module.exports = router;
