/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/equipos              ->  index
 * POST    /api/equipos              ->  create
 * GET     /api/equipos/:id          ->  show
 * PUT     /api/equipos/:id          ->  update
 * DELETE  /api/equipos/:id          ->  destroy
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sendMail = sendMail;
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _socioModel = require('./socio.model');

var _socioModel2 = _interopRequireDefault(_socioModel);

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2['default'].merge(entity, updates);
    return updated.saveAsync().spread(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.removeAsync().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransport({
  host: "Smtp.gmail.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: "estebannmuruzabal@gmail.com",
    pass: "guemes765"
  }
}));
/**
 * Send an email when the contact from is submitted
 */

function sendMail(req, res) {

  var data = req.body;

  var mailOptions = {
    from: data.contactEmail,
    to: 'estebannmuruzabal@gmail.com', // list of receivers
    subject: 'Mensaje de seccion SOCIO [Club Atletico Estudiantes]', // Subject line
    text: '\n Message from ' + data.socioName + '\n Email: ' + data.socioEmail + '\n socioDOB:' + data.socioDOB + '\n Domicilio:' + data.socioDomicilio + '\n socioLocalidad:' + data.socioLocalidad + '\n socioProvincia:' + data.socioProvincia + '\n socioPhone:' + data.socioPhone + '\n socioNuevo:' + data.socioNuevo + '\n socioCategoria:' + data.socioCategoria
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

;

// Gets a list of Socios

function index(req, res) {
  _socioModel2['default'].findAsync().then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a single Socio from the DB

function show(req, res) {
  _socioModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(respondWithResult(res))['catch'](handleError(res));
}

// Creates a new Socio in the DB

function create(req, res) {
  _socioModel2['default'].createAsync(req.body).then(respondWithResult(res, 201))['catch'](handleError(res));
}

// Updates an existing Socio in the DB

function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  _socioModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res))['catch'](handleError(res));
}

// Deletes a Socio from the DB

function destroy(req, res) {
  _socioModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(removeEntity(res))['catch'](handleError(res));
}
//# sourceMappingURL=socio.controller.js.map
