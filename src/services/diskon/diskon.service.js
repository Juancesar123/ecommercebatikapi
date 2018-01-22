// Initializes the `diskon` service on path `/diskon`
const createService = require('feathers-sequelize');
const createModel = require('../../models/diskon.model');
const hooks = require('./diskon.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'diskon',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/diskon', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('diskon');

  service.hooks(hooks);
};
