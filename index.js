const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const imageLogin = require('./src/routes/imageRouter');
// const { auth } = require('./src/middlewares/index');

const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;

const PORT = '3000';


app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/image', rescue(imageLogin.imageRouter));

app.listen(PORT, () => {
  console.log('Online');
});
