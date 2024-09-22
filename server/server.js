const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;

//import usersController
const userCont = require('../db/controllers/usersController.js');

// parses JSON from incoming request
app.use(cors());
app.use(express.json());

//handler for post at login
app.post('/login', userCont.verifyUser, (req, res) => {
  //if unsuccesful rederict to sign up is unsucessful
  //send status of 200 if suceessful
  console.log('received!');
  return res.redirect('/main');
});

//test get
app.get('/', userCont.getUsers, (req, res) => {
  console.log('got it');
  return res.status(200).json(res.locals.users);
});

//handle post

//handle post request for sign up
app.post('/signup', userCont.signUp, (req, res) => {
  return res.sendStatus(200);
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
