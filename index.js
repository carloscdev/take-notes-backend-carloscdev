const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const morgan = require('morgan');
app.use(morgan('tiny'));

const cors = require('cors');
app.use(cors());


// Connect DB
require('./config/database')

const port = process.env.PORT || 5000;


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, (req, res) => {
  console.log(`Server run in port http//localhost:${port}`)
})
