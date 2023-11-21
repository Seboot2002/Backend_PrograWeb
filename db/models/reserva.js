'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {

    static associate(models) {
      
      this.belongsTo(models.Usuario, {as:'usuario', foreignKey:'usuarioId'})
      this.belongsTo(models.Libro, {as:'libro', foreignKey:'libroId'})

    }
  }
  Reserva.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    categoria: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    idioma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};