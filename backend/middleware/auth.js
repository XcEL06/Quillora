=== FILE: backend/middleware/auth.js ===
const jwt = require('jsonwebtoken');
const User = require('../models/User');
async function protect(req, res, next){
  let token = null;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return res.status(401).json({message:'No token'});
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({message:'Invalid token'});
  }
}
function admin(req, res, next){
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({message:'Admin only'});
}
module.exports = {protect, admin};
