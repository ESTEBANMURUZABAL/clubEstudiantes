/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/equipo', require('./api/equipo'));
  app.use('/api/socio', require('./api/socio'));
  app.use('/api/contacto', require('./api/contacto'));

  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  var contacto = require('./api/contacto/contacto.controller');
  var socio = require('./api/socio/socio.controller');

  app.route('/contact-form').post(contacto.sendMail);
  app.route('/socio-form').post(socio.sendMail);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
