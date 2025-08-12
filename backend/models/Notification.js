=== FILE: backend/models/Notification.js ===
const mongoose = require('mongoose');
const NotificationSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  type: String,
  data: Object,
  read: {type:Boolean, default:false}
},{timestamps:true});
module.exports = mongoose.model('Notification', NotificationSchema);
