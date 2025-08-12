=== FILE: backend/controllers/authController.js ===
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (req,res)=>{
  const {username,email,password} = req.body;
  if (!username || !email || !password) return res.status(400).json({message:'Missing fields'});
  const exists = await User.findOne({email});
  if (exists) return res.status(400).json({message:'Email in use'});
  const user = await User.create({username,email,password});
  res.json({user, token: generateToken(user)});
};

exports.login = async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if (!user) return res.status(401).json({message:'Invalid credentials'});
  const match = await user.matchPassword(password);
  if (!match) return res.status(401).json({message:'Invalid credentials'});
  res.json({user, token: generateToken(user)});
};
