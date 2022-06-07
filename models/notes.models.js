const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = {
  values: ['PENDING', 'IN_PROGRESS', 'DONE'],
  message: '{VALUE} not valid'
};

const noteSchema = new Schema({
  name: {type: String, required: [true, 'Name is required']},
  description: {type: String, default: ''},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: [true, 'User Id is required']},
  is_active: {type: Boolean, default: true},
  status: {type: String, enum: status, default: 'PENDING' }
}, {
  timestamps: true,
  versionKey: false
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
