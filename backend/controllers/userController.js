=== FILE: backend/controllers/userController.js ===
const User = require('../models/User');

exports.getProfile = async (req,res)=>{
  const user = await User.findById(req.params.id).select('-password').populate('followers following', 'username avatar');
  if (!user) return res.status(404).json({message:'Not found'});
  res.json(user);
};

exports.searchUsers = async (req,res)=>{
  const q = req.query.q || '';
  const users = await User.find({username: {$regex: q, $options: 'i'}}).limit(20).select('username avatar bio');
  res.json(users);
};
