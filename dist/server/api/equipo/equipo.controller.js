/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/equipo              ->  index
 * POST    /api/equipo              ->  create
 * GET     /api/equipo/:id          ->  show
 * PUT     /api/equipo/:id          ->  update
 * DELETE  /api/equipo/:id          ->  destroy
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _equipoModel = require('./equipo.model');

var _equipoModel2 = _interopRequireDefault(_equipoModel);

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

// Gets a list of Equipos

function index(req, res) {
  _equipoModel2['default'].findAsync().then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a single Equipo from the DB

function show(req, res) {
  _equipoModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(respondWithResult(res))['catch'](handleError(res));
}

// Creates a new Equipo in the DB

function create(req, res) {
  _equipoModel2['default'].createAsync(req.body).then(respondWithResult(res, 201))['catch'](handleError(res));
}

// Updates an existing Equipo in the DB

function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  _equipoModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res))['catch'](handleError(res));
}

// Deletes a Equipo from the DB

function destroy(req, res) {
  _equipoModel2['default'].findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(removeEntity(res))['catch'](handleError(res));
}
//# sourceMappingURL=equipo.controller.js.map
