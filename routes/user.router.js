const express = require('express');

const UserService = require('../services/user.service');
const { verificationAuth, verifitacionAuthByUser } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new UserService();

router.post(
  '/',
  (req, res, next) => service.create(req, res, next)
);
router.get(
  '/profile/:id',
  verificationAuth,
  verifitacionAuthByUser,
  (req, res, next) => service.findOne(req, res, next)
)
router.put(
  '/profile/:id',
  verificationAuth,
  verifitacionAuthByUser,
  (req, res, next) => service.update(req, res, next)
);
router.put(
  '/password/:id',
  verificationAuth,
  verifitacionAuthByUser,
  (req, res, next) => service.updatePassword(req, res, next)
);

module.exports = router;
