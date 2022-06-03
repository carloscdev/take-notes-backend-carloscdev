const express = require('express');

const AuthService = require('../services/auth.service');

const router = express.Router();
const service = new AuthService();

router.post('/', (req, res, next) => service.auth(req, res, next));

module.exports = router;
