=== FILE: backend/routes/adminRoutes.js ===
const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/auth');
const { getReports, resolveReport } = require('../controllers/adminController');
router.get('/reports', protect, admin, getReports);
router.patch('/reports/:id/resolve', protect, admin, resolveReport);
module.exports = router;
