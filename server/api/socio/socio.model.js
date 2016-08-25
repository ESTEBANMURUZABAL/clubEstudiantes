'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SocioSchema = new mongoose.Schema({
  name: String,
  email: String,
  domicilio: String,
  localidad: String,
  provincia: String,
  dob: Date,
  phone: Number,
  socioNuevo: Boolean,
  categoria: String
});

export default mongoose.model('Socio', SocioSchema);
