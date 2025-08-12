=== FILE: backend/models/Group.js ===
const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String, default:''},
  creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  members: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  admins: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  privacy: {type:String, enum:['public','private','invite'], default:'public'},
  tags: [String]
},{timestamps:true});
module.exports = mongoose.model('Group', GroupSchema);
