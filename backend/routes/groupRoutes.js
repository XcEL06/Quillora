const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const { createGroup, joinGroup, getGroups } = require('../controllers/groupController');
router.post('/', protect, createGroup);
router.post('/:id/join', protect, joinGroup);
router.get('/', getGroups);
module.exports = router;
