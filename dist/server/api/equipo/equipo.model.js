'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EquipoSchema = new mongoose.Schema({
  clubName: String,
  escudoImagen: String,
  fecha: Date,
  puntos: Number,
  posicion: Number,
  rival: String,
  info: String,
  active: Boolean
});

exports['default'] = mongoose.model('Equipo', EquipoSchema);
module.exports = exports['default'];
//# sourceMappingURL=equipo.model.js.map
