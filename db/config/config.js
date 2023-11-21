const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()

const hostname = process.env.DB_HOST || '127.0.0.1'
const username = process.env.DB_USER || 'postgres'
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME || 'biblioteca'
const port = process.env.DBPORT || 5432
const dialect = process.env.DIALECT || 'postgres'

const db = {};

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect
})

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

module.exports = sequelize