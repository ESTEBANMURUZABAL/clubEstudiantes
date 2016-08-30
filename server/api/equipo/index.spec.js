'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var equipoCtrlStub = {
  index: 'equipoCtrl.index',
  show: 'equipoCtrl.show',
  create: 'equipoCtrl.create',
  update: 'equipoCtrl.update',
  destroy: 'equipoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var equipoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './equipo.controller': equipoCtrlStub
});

describe('Equipo API Router:', function() {

  it('should return an express router instance', function() {
    equipoIndex.should.equal(routerStub);
  });

  describe('GET /api/equipo', function() {

    it('should route to equipo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'equipoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/equipo/:id', function() {

    it('should route to equipo.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'equipoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/equipo', function() {

    it('should route to equipo.controller.create', function() {
      routerStub.post
        .withArgs('/', 'equipoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/equipo/:id', function() {

    it('should route to equipo.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'equipoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/equipo/:id', function() {

    it('should route to equipo.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'equipoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/equipo/:id', function() {

    it('should route to equipo.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'equipoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
