'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

exports['default'] = mongoose.model('Socio', SocioSchema);
module.exports = exports['default'];
//# sourceMappingURL=socio.model.js.map
