'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newSocio;

describe('Socio API:', function () {

  describe('GET /api/socios', function () {
    var socios;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/socios').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        socios = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      socios.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/socios', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/socios').send({
        name: 'New Socio',
        info: 'This is the brand new socio!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newSocio = res.body;
        done();
      });
    });

    it('should respond with the newly created socio', function () {
      newSocio.name.should.equal('New Socio');
      newSocio.info.should.equal('This is the brand new socio!!!');
    });
  });

  describe('GET /api/socios/:id', function () {
    var socio;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/socios/' + newSocio._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        socio = res.body;
        done();
      });
    });

    afterEach(function () {
      socio = {};
    });

    it('should respond with the requested socio', function () {
      socio.name.should.equal('New Socio');
      socio.info.should.equal('This is the brand new socio!!!');
    });
  });

  describe('PUT /api/socios/:id', function () {
    var updatedSocio;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/socios/' + newSocio._id).send({
        name: 'Updated socio',
        info: 'This is the updated socio!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedSocio = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedSocio = {};
    });

    it('should respond with the updated socio', function () {
      updatedSocio.name.should.equal('Updated Socio');
      updatedSocio.info.should.equal('This is the updated socio!!!');
    });
  });

  describe('DELETE /api/socios/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/socios/' + newSocio._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when equipo does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/equipos/' + newEquipo._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=socio.integration.js.map
