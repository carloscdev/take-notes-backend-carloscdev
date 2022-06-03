const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const role = {
  values: ['USER', 'ADMIN'],
  message: '{VALUE} not valid'
};

const userSchema = new Schema({
  name: {type: String, required: [true, 'Name is required']},
  position: {type: String, required: [true, 'Position is required']},
  username: {type: String, required: [true, 'Username is required'], unique: true},
  email: {type: String, required: [true, 'Email is required'], unique: true},
  password: {type: String, required: [true, 'Password is required']},
  role: {type: String, default: 'USER', enum: role},
  is_active: {type: Boolean, default: true}
}, {
  timestamps: true,
  versionKey: false
});

userSchema.pre('save', async function save(next) {
  try {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hashSync(this.password, saltRounds);;
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.plugin(uniqueValidator, { message: '{PATH} to be unique'});

userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
