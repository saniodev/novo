const express = require('express');
const services = require('../services/imageServices');

const imageRouter = express.Router();

imageRouter.post('/', services.postImage);

module.exports = {
    imageRouter,
};