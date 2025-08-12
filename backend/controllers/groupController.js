=== FILE: backend/controllers/groupController.js ===
const Group = require('../models/Group');
exports.createGroup = async (req,res)=>{
  const {name,description,privacy,tags} = req.body;
  const g = await Group.create({name,description,creator:req.user._id,admins:[req.user._id],members:[req.user._id],privacy,tags: tags?tags.split(','):[]});
  res.json(g);
};
exports.joinGroup = async (req,res)=>{
  const g = await Group.findById(req.params.id);
  if (!g) return res.status(404).json({message:'Not found'});
  if (!g.members.includes(req.user._id)){
    g.members.push(req.user._id);
    await g.save();
  }
  res.json({joined:true});
};
exports.getGroups = async (req,res)=>{
  const groups = await Group.find().limit(50);
  res.json(groups);
};
