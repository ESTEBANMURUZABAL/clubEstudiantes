/**
 * Equipo model events
 */

'use strict';

import {EventEmitter} from 'events';
var Equipo = require('./equipo.model');
var EquipoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EquipoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Equipo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EquipoEvents.emit(event + ':' + doc._id, doc);
    EquipoEvents.emit(event, doc);
  }
}

export default EquipoEvents;
