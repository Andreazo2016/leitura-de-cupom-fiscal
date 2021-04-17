import Sequelize from 'sequelize'
import Buyer from './models/Buyer'
import Product from './models/Product'
import Shopping from './models/Shopping'
import TaxCoupons from './models/TaxCoupons'


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

export default Database;