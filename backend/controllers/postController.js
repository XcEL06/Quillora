=== FILE: backend/controllers/postController.js ===
const Post = require('../models/Post');
exports.createPost = async (req,res)=>{
  const {content,tags,privacy,mediaType} = req.body;
  const mediaUrl = req.file ? '/uploads/' + req.file.filename : '';
  const post = await Post.create({author: req.user._id, content, tags: tags?tags.split(','):[], mediaUrl, mediaType: mediaType || 'none', privacy: privacy||'public'});
  res.json(post);
};
exports.getFeed = async (req,res)=>{
  const posts = await Post.find({privacy:'public'}).sort({createdAt:-1}).limit(50).populate('author','username avatar');
  res.json(posts);
};
exports.getPost = async (req,res)=>{
  const post = await Post.findById(req.params.id).populate('author','username avatar');
  if (!post) return res.status(404).json({message:'Not found'});
  res.json(post);
};
exports.likePost = async (req,res)=>{
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({message:'Not found'});
  if (post.likes.includes(req.user._id)) {
    post.likes = post.likes.filter(l=>!l.equals(req.user._id));
  } else {
    post.likes.push(req.user._id);
  }
  await post.save();
  res.json({likes: post.likes.length});
};
