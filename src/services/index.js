const users = require('./users/users.service.js');
const productlist = require('./productlist/productlist.service.js');
const promo = require('./promo/promo.service.js');
const diskon = require('./diskon/diskon.service.js');
const datapelanggan = require('./datapelanggan/datapelanggan.service.js');
const trackingpengiriman = require('./trackingpengiriman/trackingpengiriman.service.js');
const cart = require('./cart/cart.service.js');
const chat = require('./chat/chat.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(productlist);
  app.configure(promo);
  app.configure(diskon);
  app.configure(datapelanggan);
  app.configure(trackingpengiriman);
  app.configure(cart);
  app.configure(chat);
};
