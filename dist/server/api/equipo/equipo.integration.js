'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newEquipo;

describe('Equipo API:', function () {

  describe('GET /api/equipo', function () {
    var equipos;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/equipo').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        equipos = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      equipos.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/equipo', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/equipo').send({
        name: 'New Equipo',
        info: 'This is the brand new equipo!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newEquipo = res.body;
        done();
      });
    });

    it('should respond with the newly created equipo', function () {
      newEquipo.name.should.equal('New Equipo');
      newEquipo.info.should.equal('This is the brand new equipo!!!');
    });
  });

  describe('GET /api/equipo/:id', function () {
    var equipo;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/equipo/' + newEquipo._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        equipo = res.body;
        done();
      });
    });

    afterEach(function () {
      equipo = {};
    });

    it('should respond with the requested equipo', function () {
      equipo.name.should.equal('New Equipo');
      equipo.info.should.equal('This is the brand new equipo!!!');
    });
  });

  describe('PUT /api/equipo/:id', function () {
    var updatedEquipo;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/equipo/' + newEquipo._id).send({
        name: 'Updated Equipo',
        info: 'This is the updated equipo!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedEquipo = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedEquipo = {};
    });

    it('should respond with the updated equipo', function () {
      updatedEquipo.name.should.equal('Updated Equipo');
      updatedEquipo.info.should.equal('This is the updated equipo!!!');
    });
  });

  describe('DELETE /api/equipo/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/equipo/' + newEquipo._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when equipo does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/equipo/' + newEquipo._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=equipo.integration.js.map
