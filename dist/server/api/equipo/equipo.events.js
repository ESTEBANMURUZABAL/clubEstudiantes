/**
 * Equipo model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Equipo = require('./equipo.model');
var EquipoEvents = new _events.EventEmitter();

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
  return function (doc) {
    EquipoEvents.emit(event + ':' + doc._id, doc);
    EquipoEvents.emit(event, doc);
  };
}

exports['default'] = EquipoEvents;
module.exports = exports['default'];
//# sourceMappingURL=equipo.events.js.map
