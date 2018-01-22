// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productlist = sequelizeClient.define('productlist', {
    namabarang: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    warna: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stotk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    berat: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    gambar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ukuran: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  productlist.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return productlist;
};
