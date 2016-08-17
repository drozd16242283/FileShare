const config   = require('../config/');
const mongoose = require('mongoose');


const connectUrl = config.get('db:dbAdress');

mongoose.connect(connectUrl);


module.exports = mongoose;
