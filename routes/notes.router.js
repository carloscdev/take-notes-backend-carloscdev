const express = require('express');

const NotesService = require('../services/notes.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createNotesSchema, updateNotesSchema, getNoteSchema } = require('../schemas/notes.schema');

const router = express.Router();
const service = new NotesService();

router.post(
  '/',
  validatorHandler(createNotesSchema, 'body'),
  (req, res, next) => service.create(req, res, next)
);
router.get(
  '/',
  (req, res, next) => service.find(req, res, next)
);
router.get(
  '/:id',
  validatorHandler(getNoteSchema, 'params'),
  (req, res, next) => service.findOne(req, res, next)
);
router.delete(
  '/:id',
  validatorHandler(getNoteSchema, 'params'),
  (req, res, next) => service.delete(req, res, next)
);
router.put(
  '/:id',
  validatorHandler(getNoteSchema, 'params'),
  validatorHandler(updateNotesSchema, 'body'),
  (req, res, next) => service.update(req, res, next)
);

module.exports = router;
