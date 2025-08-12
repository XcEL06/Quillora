=== FILE: backend/routes/reportRoutes.js ===
const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const { createReport } = require('../controllers/reportController');
router.post('/', protect, createReport);
module.exports = router;
