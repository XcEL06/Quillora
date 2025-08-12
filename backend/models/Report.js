=== FILE: backend/models/Report.js ===
const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
  reporter: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  targetType: String,
  targetId: String,
  reason: String,
  status: {type:String, enum:['pending','dismissed','resolved'], default:'pending'}
},{timestamps:true});
module.exports = mongoose.model('Report', ReportSchema);
