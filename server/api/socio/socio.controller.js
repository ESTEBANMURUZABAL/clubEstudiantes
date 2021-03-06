/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/equipos              ->  index
 * POST    /api/equipos              ->  create
 * GET     /api/equipos/:id          ->  show
 * PUT     /api/equipos/:id          ->  update
 * DELETE  /api/equipos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Socio from './socio.model';

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

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "Smtp.gmail.com",
    secureConnection : false,
    port: 587,
    auth : {
        user : "estebannmuruzabal@gmail.com",
        pass : "guemes765"
    }
}));
/**
 * Send an email when the contact from is submitted
 */
export function sendMail(req, res) {
 
    var data = req.body;
 
var mailOptions = {
    from: data.contactEmail,
    to: 'estebannmuruzabal@gmail.com', // list of receivers
    subject: 'Mensaje de seccion SOCIO [Club Atletico Estudiantes]', // Subject line
    text:  '\n Message from ' + data.socioName 
         + '\n Email: ' + data.socioEmail 
         + '\n socioDOB:' + data.socioDOB
         + '\n Domicilio:' + data.socioDomicilio 
         + '\n socioLocalidad:' + data.socioLocalidad 
         + '\n socioProvincia:' + data.socioProvincia 
         + '\n socioPhone:' + data.socioPhone 
         + '\n socioNuevo:' + data.socioNuevo 
         + '\n socioCategoria:' + data.socioCategoria ,  
};  

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
};

// Gets a list of Socios
export function index(req, res) {
  Socio.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Socio from the DB
export function show(req, res) {
  Socio.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Socio in the DB
export function create(req, res) {
  Socio.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Socio in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Socio.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Socio from the DB
export function destroy(req, res) {
  Socio.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
