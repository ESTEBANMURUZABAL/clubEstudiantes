'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SocioSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: Date,
  phone: Number,
  active: Boolean
});

export default mongoose.model('Socio', SocioSchema);
