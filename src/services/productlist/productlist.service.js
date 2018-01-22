// Initializes the `productlist` service on path `/productlist`
const createService = require('feathers-sequelize');
const createModel = require('../../models/productlist.model');
const hooks = require('./productlist.hooks');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);        
  }
})
const multipartMiddleware = multer();
const upload = multer({ storage: storage});
module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'productlist',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/productlist', upload.single('gambar'), createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('productlist');

  service.hooks(hooks);
};
