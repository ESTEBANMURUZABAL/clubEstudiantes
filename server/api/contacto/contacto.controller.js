/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/contacto              ->  index
 * POST    /api/contacto              ->  create
 * GET     /api/contacto/:id          ->  show
 * PUT     /api/contacto/:id          ->  update
 * DELETE  /api/contacto/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Contacto from './contacto.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Contactos
export function index(req, res) {
  Contacto.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Contacto from the DB
export function show(req, res) {
  Contacto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Contacto in the DB
export function create(req, res) {
  Contacto.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp-mail.outlook.com",
    secureConnection : false,
    port: 25,
    auth : {
        user : "estebanmuruzabal@hotmail.com",
        pass : "estebanm"
    }
}));
 
/**
 * Send an email when the contact from is submitted
 */
export function sendMail(req, res) {
 
    var data = req.body;
 
var mailOptions = {
    from: data.contactEmail,
    to: 'estebanmuruzabal@hotmail.com', // list of receivers
    subject: 'Mensaje de seccion contacto [Club Atletico Estudiantes]', // Subject line
    text:  '\n Message from ' + data.contactName 
         + '\n Email: ' + data.contactEmail 
         + '\n Message:' + data.contactMsg 
         + '\n Phone:' + data.contactPhone,  
};



// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
};

// Updates an existing Contacto in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Contacto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Contacto from the DB
export function destroy(req, res) {
  Contacto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
