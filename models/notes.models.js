const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  name: {type: String, required: [true, 'Name is required']},
  description: {type: String, required: [true, 'Description is required']},
  // user: {type: Schema.Types.ObjectId, ref: 'User', required: [true, 'User Id is required']},
  user: String,
  is_active: {type: Boolean, default: true},
  status: {type: String, enum:['PENDING', 'IN_PROCESS', 'DONE'], default: 'PENDING' }
}, {
  timestamps: true,
  versionKey: false
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
