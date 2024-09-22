const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;

// parses JSON from incoming request
app.use(cors());
app.use(express.json());

//handle post requirest
app.post('/signup', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'signup info received' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'signup info received' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
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
