'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ContactoSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: Number,
  answered: Boolean
});

exports['default'] = mongoose.model('Contacto', ContactoSchema);
module.exports = exports['default'];
//# sourceMappingURL=contacto.model.js.map
