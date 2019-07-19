/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
const mongoose = require('mongoose');
const Description = require('./Description.js');
const generateFakeDescriptions = require('./seed.js');

mongoose.connect('mongodb+srv://admin:description@listingdescriptions-omqwn.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('mongoose connected to database');
  db.dropCollection('descriptions');
  console.log('deleted');
  const docs = generateFakeDescriptions();
  try {
    await Description.create(docs);
    console.log('inserted');
  } catch (err) {
    console.error(err);
  }
});
