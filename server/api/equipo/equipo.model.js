'use strict';

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

export default mongoose.model('Equipo', EquipoSchema);
