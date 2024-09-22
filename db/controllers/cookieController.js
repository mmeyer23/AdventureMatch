const db = require('../models/usersModel');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    res.cookie('test', 'cookie')
    console.log('cookie created!')
    return next()
}
//can't set this until they successfully log in and we can access their id
cookieController.setSSID = (req, res, next) => {
  
}

module.exports = cookieController