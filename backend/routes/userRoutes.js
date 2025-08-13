const express = require('express');
const router = express.Router();
const { getProfile, searchUsers } = require('../controllers/userController');
router.get('/profile/:id', getProfile);
router.get('/search', searchUsers);
module.exports = router;
