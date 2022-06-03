const Joi = require('joi');

const id = Joi.string().hex();
const name = Joi.string().min(5).max(150);
const description = Joi.string().min(10).max(500);
const user = Joi.string();
const status = Joi.string().valid('PENDING', 'IN_PROCESS', 'DONE');
const is_active = Joi.boolean();


const createNotesSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  user,
  status,
  is_active
})

const updateNotesSchema = Joi.object({
  name,
  description,
  user,
  status,
  is_active
})

const getNoteSchema = Joi.object({
  id: id.required()
})

module.exports = { createNotesSchema, updateNotesSchema, getNoteSchema }
