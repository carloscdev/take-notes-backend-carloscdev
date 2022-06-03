const User = require('../models/user.models');
const boom = require('@hapi/boom');
const _ = require('underscore');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

class AuthService {
  constructor() {}

  async auth(req, res, next) {
    try {
      const body = req.body;
      const user = await User.findOne({username: body.username});
      if (!user) {
        throw boom.notFound("Username not found");
      }
      if (!bcrypt.compareSync(body.password, user.password)) {
        throw boom.notFound("Password wrong");
      }

      // Generate Token JWT
      const token = jwt.sign({
        data: user
      }, process.env.SECRET_JWT, { expiresIn: 60 * 60 * 24 * 30});

      res.json(({
        user,
        token
      }))
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthService;
