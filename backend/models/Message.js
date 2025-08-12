=== FILE: backend/models/Message.js ===
const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  conversationId: String,
  from: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  to: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  text: String,
  read: {type:Boolean, default:false}
},{timestamps:true});
module.exports = mongoose.model('Message', MessageSchema);
