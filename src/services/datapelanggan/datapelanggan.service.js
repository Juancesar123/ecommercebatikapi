// Initializes the `datapelanggan` service on path `/datapelanggan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datapelanggan.model');
const hooks = require('./datapelanggan.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datapelanggan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datapelanggan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datapelanggan');

  service.hooks(hooks);
};
