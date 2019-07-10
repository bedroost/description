const express = require('express');
// const morgan = require('morgan');
const getData = require('../db/index.js');

const app = express();
const port = 8080;

app.use(express.static('./dist'));

app.get('/description/:listingId', (req, res) => {
  getData();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
