const notesRouter = require('./notes.router');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  app.use('/api/notes', notesRouter);
  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);
}

module.exports = routerApi
