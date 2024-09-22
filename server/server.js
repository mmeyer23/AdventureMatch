const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;
const cookieController = require('../db/controllers/cookieController.js');
//import usersController
const userCont = require('../db/controllers/usersController.js');

// parses JSON from incoming request
app.use(cors());
app.use(express.json());

//handler for post at login
//AS: added middleware for creating cookie upon login - haven't tested yet
app.post(
  '/login',
  userCont.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    console.log('received!');
    return res.redirect('/main');
  }
);

//test get
//AS: this set cookie middleware is currently working for this get request
app.get('/', userCont.getUsers, cookieController.setCookie, (req, res) => {
  console.log('got it again');
  return res.status(200).json(res.locals.users);
});

//handle post

//handle post request for sign up
//AS: not sure if we acutally need to create a cookie when they sign up.. probably just when they sign in?
app.post('/signup', userCont.signUp, cookieController.setCookie, (req, res) => {
  return res.status(200).json(res.locals.success);
});

app.post('/main', (req, res) => {
  res.status(200).json({ message: 'search criteria has been recevied' });
});

//handles a post request form main that sends a ticket to the data base

//handles a get request from main that sends any existing tickets to the feed

// Global error handling middleware
app.use((err, req, res, next) => {
  console.log('err');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
