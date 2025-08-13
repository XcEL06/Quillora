const User = require('../models/User');
const Report = require('../models/Report');
exports.getReports = async (req,res)=>{
  const reports = await Report.find().sort({createdAt:-1}).populate('reporter','username');
  res.json(reports);
};
exports.resolveReport = async (req,res)=>{
  const r = await Report.findById(req.params.id);
  if (!r) return res.status(404).json({message:'Not found'});
  r.status = 'resolved';
  await r.save();
  res.json(r);
};
