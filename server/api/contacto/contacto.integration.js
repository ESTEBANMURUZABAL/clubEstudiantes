'use strict';

var app = require('../..');
import request from 'supertest';

var newContacto;

describe('Contacto API:', function() {

  describe('GET /api/contacto', function() {
    var contactos;

    beforeEach(function(done) {
      request(app)
        .get('/api/contacto')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          contactos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      contactos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/contacto', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/contacto')
        .send({
          name: 'New Contacto',
          info: 'This is the brand new contacto!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newContacto = res.body;
          done();
        });
    });

    it('should respond with the newly created contacto', function() {
      newContacto.name.should.equal('New Contacto');
      newContacto.info.should.equal('This is the brand new contacto!!!');
    });

  });

  describe('GET /api/contacto/:id', function() {
    var contacto;

    beforeEach(function(done) {
      request(app)
        .get('/api/contacto/' + newContacto._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          contacto = res.body;
          done();
        });
    });

    afterEach(function() {
      contacto = {};
    });

    it('should respond with the requested contacto', function() {
      contacto.name.should.equal('New Contacto');
      contacto.info.should.equal('This is the brand new contacto!!!');
    });

  });

  describe('PUT /api/contacto/:id', function() {
    var updatedContacto;

    beforeEach(function(done) {
      request(app)
        .put('/api/contacto/' + newContacto._id)
        .send({
          name: 'Updated Contacto',
          info: 'This is the updated contacto!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedContacto = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedContacto = {};
    });

    it('should respond with the updated contacto', function() {
      updatedContacto.name.should.equal('Updated Contacto');
      updatedContacto.info.should.equal('This is the updated contacto!!!');
    });

  });

  describe('DELETE /api/contacto/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/contacto/' + newContacto._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when contacto does not exist', function(done) {
      request(app)
        .delete('/api/contacto/' + newContacto._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
