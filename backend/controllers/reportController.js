const Report = require('../models/Report');
exports.createReport = async (req,res)=>{
  const {targetType,targetId,reason} = req.body;
  const r = await Report.create({reporter:req.user._id,targetType,targetId,reason});
  res.json(r);
};
