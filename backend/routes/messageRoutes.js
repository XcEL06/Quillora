=== FILE: backend/routes/messageRoutes.js ===
const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const { sendMessage, getConversation } = require('../controllers/messageController');
router.post('/', protect, sendMessage);
router.get('/conversation/:userId', protect, getConversation);
module.exports = router;
