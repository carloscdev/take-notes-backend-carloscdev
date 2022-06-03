const express = require('express');

const NotesService = require('../services/notes.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createNotesSchema, updateNotesSchema, getNoteSchema } = require('../schemas/notes.schema');
const { verificationAuth, verifitacionNoteByUser } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new NotesService();

router.post(
  '/',
  verificationAuth,
  validatorHandler(createNotesSchema, 'body'),
  (req, res, next) => service.create(req, res, next)
);
router.get(
  '/',
  verificationAuth,
  (req, res, next) => service.find(req, res, next)
);
router.get(
  '/:id',
  verificationAuth,
  verifitacionNoteByUser,
  validatorHandler(getNoteSchema, 'params'),
  (req, res, next) => service.findOne(req, res, next)
);
router.delete(
  '/:id',
  verificationAuth,
  verifitacionNoteByUser,
  validatorHandler(getNoteSchema, 'params'),
  (req, res, next) => service.delete(req, res, next)
);
router.put(
  '/:id',
  verificationAuth,
  verifitacionNoteByUser,
  validatorHandler(getNoteSchema, 'params'),
  validatorHandler(updateNotesSchema, 'body'),
  (req, res, next) => service.update(req, res, next)
);

module.exports = router;
