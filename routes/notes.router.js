const express = require('express');

const NotesService = require('../services/notes.service');
const service = new NotesService();

const router = express.Router();

router.post('/', (req, res) => service.create(req, res));
router.get('/', (req, res) => service.find(req, res));
router.get('/:id', (req, res) => service.findOne(req, res));
router.delete('/:id', (req, res) => service.delete(req, res));
router.put('/:id', (req, res) => service.update(req, res));

module.exports = router;
