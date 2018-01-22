// Initializes the `trackingpengiriman` service on path `/trackingpengiriman`
const createService = require('feathers-sequelize');
const createModel = require('../../models/trackingpengiriman.model');
const hooks = require('./trackingpengiriman.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'trackingpengiriman',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trackingpengiriman', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('trackingpengiriman');

  service.hooks(hooks);
};
