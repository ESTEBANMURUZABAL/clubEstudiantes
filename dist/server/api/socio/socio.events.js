/**
 * Socio model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Socio = require('./socio.model');
var SocioEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
SocioEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Socio.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    SocioEvents.emit(event + ':' + doc._id, doc);
    SocioEvents.emit(event, doc);
  };
}

exports['default'] = SocioEvents;
module.exports = exports['default'];
//# sourceMappingURL=socio.events.js.map
