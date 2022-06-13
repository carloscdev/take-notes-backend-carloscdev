const User = require('../models/user.models');
const boom = require('@hapi/boom');
const _ = require('underscore');

class UserService {
  constructor() {}

  async create(req, res, next) {
    try {
      const body = req.body;
      const response = await User.create(body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const _id = req.params.id;
      const response = await User.findOne({_id});
      if  (!response) {
        throw boom.notFound("Token is not valid");
      }
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const _id = req.params.id;
      const body = _.pick(req.body, ['name', 'email', 'username', 'position', 'background']);
      const response = await User.findByIdAndUpdate(_id, body, {new: true, runValidators: true});
      res.json(response)
    } catch (error) {
      next(error);
    }
  }

  async updatePassword(req, res, next) {
    try {
      const _id = req.params.id;
      const body = _.pick(req.body, ['password']);
      await User.findByIdAndUpdate(_id, body, {new: true});
      res.json({status: 200, message: 'Password updated'})
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserService;
