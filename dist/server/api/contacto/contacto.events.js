/**
 * Contacto model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Contacto = require('./contacto.model');
var ContactoEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
ContactoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Contacto.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    ContactoEvents.emit(event + ':' + doc._id, doc);
    ContactoEvents.emit(event, doc);
  };
}

exports['default'] = ContactoEvents;
module.exports = exports['default'];
//# sourceMappingURL=contacto.events.js.map
