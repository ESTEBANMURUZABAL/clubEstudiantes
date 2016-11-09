'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var contactoCtrlStub = {
  index: 'contactoCtrl.index',
  show: 'contactoCtrl.show',
  create: 'contactoCtrl.create',
  update: 'contactoCtrl.update',
  destroy: 'contactoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  'delete': sinon.spy()
};

// require the index with our stubbed out modules
var contactoIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './contacto.controller': contactoCtrlStub
});

describe('Contacto API Router:', function () {

  it('should return an express router instance', function () {
    contactoIndex.should.equal(routerStub);
  });

  describe('GET /api/contacto', function () {

    it('should route to contacto.controller.index', function () {
      routerStub.get.withArgs('/', 'contactoCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/contacto/:id', function () {

    it('should route to contacto.controller.show', function () {
      routerStub.get.withArgs('/:id', 'contactoCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/contacto', function () {

    it('should route to contacto.controller.create', function () {
      routerStub.post.withArgs('/', 'contactoCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/contacto/:id', function () {

    it('should route to contacto.controller.update', function () {
      routerStub.put.withArgs('/:id', 'contactoCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/contacto/:id', function () {

    it('should route to contacto.controller.update', function () {
      routerStub.patch.withArgs('/:id', 'contactoCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/contacto/:id', function () {

    it('should route to contacto.controller.destroy', function () {
      routerStub['delete'].withArgs('/:id', 'contactoCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
