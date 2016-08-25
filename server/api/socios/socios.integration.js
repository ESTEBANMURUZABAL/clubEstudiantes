'use strict';

var app = require('../..');
import request from 'supertest';

var newSocios;

describe('Socios API:', function() {

  describe('GET /api/socios', function() {
    var socioss;

    beforeEach(function(done) {
      request(app)
        .get('/api/socios')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          socioss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      socioss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/socios', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/socios')
        .send({
          name: 'New Socios',
          info: 'This is the brand new socios!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSocios = res.body;
          done();
        });
    });

    it('should respond with the newly created socios', function() {
      newSocios.name.should.equal('New Socios');
      newSocios.info.should.equal('This is the brand new socios!!!');
    });

  });

  describe('GET /api/socios/:id', function() {
    var socios;

    beforeEach(function(done) {
      request(app)
        .get('/api/socios/' + newSocios._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          socios = res.body;
          done();
        });
    });

    afterEach(function() {
      socios = {};
    });

    it('should respond with the requested socios', function() {
      socios.name.should.equal('New Socios');
      socios.info.should.equal('This is the brand new socios!!!');
    });

  });

  describe('PUT /api/socios/:id', function() {
    var updatedSocios;

    beforeEach(function(done) {
      request(app)
        .put('/api/socios/' + newSocios._id)
        .send({
          name: 'Updated Socios',
          info: 'This is the updated socios!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSocios = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSocios = {};
    });

    it('should respond with the updated socios', function() {
      updatedSocios.name.should.equal('Updated Socios');
      updatedSocios.info.should.equal('This is the updated socios!!!');
    });

  });

  describe('DELETE /api/socios/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/socios/' + newSocios._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when socios does not exist', function(done) {
      request(app)
        .delete('/api/socios/' + newSocios._id)
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
