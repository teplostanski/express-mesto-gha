const router = require('express').Router();
const {
  getUsers, getUserById, getCurrentUserInfo, updateUserInfo, updateAvatar,
} = require('../controllers/user');

router.get('/', getUsers);
router.get('/me', getCurrentUserInfo);
router.get('/:userId', getUserById);
router.patch('/me', updateUserInfo);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
