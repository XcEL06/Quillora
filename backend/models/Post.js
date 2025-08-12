=== FILE: backend/models/Post.js ===
const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  content: {type:String},
  mediaUrl: {type:String},
  mediaType: {type:String, enum:['image','audio','book','none'], default:'none'},
  tags: [String],
  likes: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  comments: [{type: mongoose.Schema.Types.ObjectId}],
  privacy: {type:String, enum:['public','followers','private'], default:'public'},
  location: {type:String, default:''}
},{timestamps:true});
module.exports = mongoose.model('Post', PostSchema);
