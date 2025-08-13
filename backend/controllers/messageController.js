const Message = require('../models/Message');
exports.sendMessage = async (req,res)=>{
  const {to, text, conversationId} = req.body;
  const msg = await Message.create({from: req.user._id, to, text, conversationId: conversationId || null});
  // optionally notify via socket
  const io = req.app.get('io');
  io && io.to('user_' + String(to)).emit('receive_message', {from: req.user._id, to, text, _id: msg._id});
  res.json(msg);
};
exports.getConversation = async (req,res)=>{
  const {userId} = req.params;
  const messages = await Message.find({$or:[{from:req.user._id,to:userId},{from:userId,to:req.user._id}]}).sort({createdAt:1});
  res.json(messages);
};
