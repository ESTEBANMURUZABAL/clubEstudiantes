/**
 * Socios model events
 */

'use strict';

import {EventEmitter} from 'events';
var Socios = require('./socios.model');
var SociosEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SociosEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Socios.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SociosEvents.emit(event + ':' + doc._id, doc);
    SociosEvents.emit(event, doc);
  }
}

export default SociosEvents;
