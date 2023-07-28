const { Router } = require('express');

const ctrl = require('../controllers');
const schemas = require('../validation');
const { jsonParser, authenticate, upload } = require('../middlewares');

const router = Router();

router.get('/current', authenticate, ctrl.users.getCurrent);
router.post('/verify', jsonParser, schemas.user.verify, ctrl.users.verifyEmail);
router.patch('/avatar', jsonParser, authenticate, upload.single('avatar'), ctrl.users.updateAvatar);
router.delete('/current', authenticate, ctrl.users.deleteCurrent);

module.exports = router;
