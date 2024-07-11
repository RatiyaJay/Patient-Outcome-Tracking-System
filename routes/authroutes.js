const express = require('express');
const authcontroller = require('../controller/authcontroller');
const route = express.Router();

route.post('/loging', authcontroller.loging);
route.post('/signup', authcontroller.signup);

module.exports = route;