const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const Note = require('../models/notes.models');

function verificationAuth(req, res, next) {
  try {
    const token = req.headers['authorization'];
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if (err) {
        throw boom.unauthorized("Token is not valid");
      }
      req.user = decoded.data
      next();
    });
  } catch (error) {
    next(error);
  }
}

function verifitacionAuthByUser(req, res, next) {
  try {
    const _id = req.params.id;
    if (_id === req.user._id){
      next();
    } else {
      throw boom.unauthorized("You don't have permissions");
    }
  } catch (error) {
    next(error);
  }
}

async function verifitacionNoteByUser(req, res, next) {
  try {
    const _id = req.params.id;
    const note = await Note.findOne({user: req.user._id});
    console.log(note, '>>>>>>>>>>>>>>>>>>>');
    if (!note){
      throw boom.unauthorized("You don't have permissions to edit this note");
    }
    next()
  } catch (error) {
    next(error);
  }
}

function verifitacionRole(req, res, next) {
  try {
    const role = req.user.role
    if(role === 'ADMIN') {
      next();
    } else {
      throw boom.unauthorized("You don't have access");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { verificationAuth, verifitacionRole, verifitacionAuthByUser, verifitacionNoteByUser };
