'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sociosCtrlStub = {
  index: 'sociosCtrl.index',
  show: 'sociosCtrl.show',
  create: 'sociosCtrl.create',
  update: 'sociosCtrl.update',
  destroy: 'sociosCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sociosIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './socios.controller': sociosCtrlStub
});

describe('Socios API Router:', function() {

  it('should return an express router instance', function() {
    sociosIndex.should.equal(routerStub);
  });

  describe('GET /api/socios', function() {

    it('should route to socios.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sociosCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/socios/:id', function() {

    it('should route to socios.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sociosCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/socios', function() {

    it('should route to socios.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sociosCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/socios/:id', function() {

    it('should route to socios.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'sociosCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/socios/:id', function() {

    it('should route to socios.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'sociosCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/socios/:id', function() {

    it('should route to socios.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sociosCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
