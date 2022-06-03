const Note = require('../models/notes.models')

class NotesService {
  constructor() {}

  async create(req, res) {
    try {
      const body = req.body;
      const response = await Note.create(body);
      res.json(response)
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async find(req, res) {
    try {
      const { search, is_active } = req.query;
      const regex = new RegExp(search, 'i')
      console.log(search);
      const noteDB = await Note.find({is_active: is_active ?? true, name: {$regex: regex}});
      res.json(noteDB)
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async findOne(req, res) {
    try {
      const _id = req.params.id;
      const response = await Note.findOne({_id, is_active: true});
      if (!response) {
        return res.status(404).json({message: "Note not found"});
      }
      res.json(response);
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async delete(req, res) {
    try {
      const _id = req.params.id;
      const response = await Note.findByIdAndDelete({_id});
      if (!response) {
        return res.status(404).json({message: 'Note not found'});
      }
      return res.json(response);
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async update(req, res) {
    try {
      const _id = req.params.id;
      const body = req.body;
      const response = await Note.findByIdAndUpdate(_id, body, {new: true});
      if (!response) {
        return res.status(404).json({message: 'Note not found'});
      }
      return res.json(response);
    } catch (error) {
      res.json({message: error.message});
    }
  }
}


module.exports = NotesService;
