const mongoose = require('mongoose');
const Description = require('./Description.js');
const generateFakeDescriptions = require('./seed.js');

mongoose.connect('mongodb://localhost:27017/descriptions');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('connected');
  const docs = generateFakeDescriptions();
  try {
    await Description.create(docs);
    console.log('inserted');
  } catch (err) {
    console.error(err);
  }
});

const getData = () => {
  Description.findById(134030, (err, res) => { // res is response from database
    if (err) {
      console.log(err, 'error');
    } else {
      console.log(res);
    }
  });
};

module.exports = getData;
