const Sequelize = require('sequelize')
const Buyer = require('./models/Buyer')
const Product = require('./models/Product')
const Shopping = require('./models/Shopping')
const TaxCoupons = require('./models/TaxCoupons')


const models = [Buyer, Product, Shopping, TaxCoupons]

class Database {
  constructor(databaseConfig) {
    this.init(databaseConfig);
  }

  init(databaseConfig) {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
  }
}

module.exports = Database;