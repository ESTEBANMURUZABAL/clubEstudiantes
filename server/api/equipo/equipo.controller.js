/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/equipo              ->  index
 * POST    /api/equipo              ->  create
 * GET     /api/equipo/:id          ->  show
 * PUT     /api/equipo/:id          ->  update
 * DELETE  /api/equipo/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Equipo from './equipo.model';

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

// Gets a list of Equipos
export function index(req, res) {
  Equipo.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Equipo from the DB
export function show(req, res) {
  Equipo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Equipo in the DB
export function create(req, res) {
  Equipo.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Equipo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Equipo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Equipo from the DB
export function destroy(req, res) {
  Equipo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
