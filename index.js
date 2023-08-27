const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const imageLogin = require('./src/routes/imageRouter');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/image', rescue(imageLogin.imageRouter));

app.listen(process.env.PORT, () => {
  console.log(`Online na porta ${process.env.PORT}`);
});
