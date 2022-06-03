const Note = require('../models/notes.models')
const boom = require('@hapi/boom');

class NotesService {
  constructor() {}

  async create(req, res, next) {
    try {
      const body = req.body;
      body.user = req.user._id
      const response = await Note.create(body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const { search, is_active } = req.query;
      const regex = new RegExp(search, 'i')
      const noteDB = await Note.find({user: req.user._id,is_active: is_active ?? true, name: {$regex: regex}});
      res.json(noteDB)
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const _id = req.params.id;
      const response = await Note.findOne({_id, is_active: true});
      if (!response) {
        throw boom.notFound("Note not found");
      }
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const _id = req.params.id;
      const response = await Note.findByIdAndDelete({_id});
      if (!response) {
        throw boom.notFound("Note not found");
      }
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const _id = req.params.id;
      const body = req.body;
      const response = await Note.findByIdAndUpdate(_id, body, {new: true});
      if (!response) {
        throw boom.notFound("Note not found");
      }
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }
}


module.exports = NotesService;
