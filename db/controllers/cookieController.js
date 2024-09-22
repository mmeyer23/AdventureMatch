const db = require('../models/usersModel');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    res.cookie('test', 'cookie')
    console.log('cookie created!')
    return next()
}

cookieController.setSSID = (req, res, next) => {
  
}

module.exports = cookieController