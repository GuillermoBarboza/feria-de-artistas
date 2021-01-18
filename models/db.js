const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(PROCESS.ENV.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connegtadissimo')
});


module.exports = mongoose;

