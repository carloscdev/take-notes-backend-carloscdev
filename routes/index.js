const notesRouter = require('./notes.router')

function routerApi(app) {
  app.use('/api/notes', notesRouter);
}

module.exports = routerApi
