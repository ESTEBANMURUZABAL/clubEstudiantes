'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ContactoSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  answered: Boolean
});

export default mongoose.model('Contacto', ContactoSchema);
