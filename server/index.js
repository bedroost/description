/* eslint-disable func-names */
const express = require('express');
const morgan = require('morgan');
const Description = require('../db/Description.js');
const database = require('../db/index.js');

console.log(Description);

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(morgan('dev'));

app.get('/rooms/:listingId', (req, res) => {
  const id = req.params.listingId;
  Description.findById(169647, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});

/*
use different end points for requesting data and serving static assets

requesting static assets and database data shouldn't be in one request

server and client can't use same port unless they use different endpoints
*/
