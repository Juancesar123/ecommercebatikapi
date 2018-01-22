// Initializes the `promo` service on path `/promo`
const createService = require('feathers-sequelize');
const createModel = require('../../models/promo.model');
const hooks = require('./promo.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'promo',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/promo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('promo');

  service.hooks(hooks);
};
