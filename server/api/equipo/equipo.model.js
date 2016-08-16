'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EquipoSchema = new mongoose.Schema({
  name: String,
  escudoImagen: String,
  fecha: Date,
  puntos: Number,
  info: String,
  active: Boolean
});

export default mongoose.model('Equipo', EquipoSchema);
