const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const upload = require('../middleware/upload');
const { createPost, getFeed, getPost, likePost } = require('../controllers/postController');

router.get('/feed', getFeed);
router.get('/:id', getPost);
router.post('/', protect, upload.single('file'), createPost);
router.post('/:id/like', protect, likePost);

module.exports = router;
