// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datapelanggan = sequelizeClient.define('datapelanggan', {
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomortelpon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jeniskelamin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tempatlahir: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggallahir: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  datapelanggan.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datapelanggan;
};
