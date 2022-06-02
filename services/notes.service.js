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
      const noteDB = await Note.find();
      res.json(noteDB)
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async findOne(req, res) {
    try {
      const _id = req.params.id;
      const response = await Note.findOne({_id});
      res.json(response);
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async delete(req, res) {
    try {
      const _id = req.params.id;
      const noteDB = await Note.findByIdAndDelete({_id});
      if (!noteDB) {
        return res.status(500).json({message: 'An error has occurred'});
      }
      return res.json(noteDB);
    } catch (error) {
      res.json({message: error.message});
    }
  }

  async update(req, res) {
    try {
      const _id = req.params.id;
      const body = req.body;
      const response = await Note.findByIdAndUpdate(_id, body, {new: true});
      res.json(response);
    } catch (error) {
      res.json({message: error.message});
    }
  }
}


module.exports = NotesService;
