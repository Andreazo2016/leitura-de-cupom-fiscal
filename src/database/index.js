import Sequelize from 'sequelize'
import Buyer from './models/Buyer'
import Product from './models/Product'
import Shopping from './models/Shopping'
import TaxCoupons from './models/TaxCoupons'

import databaseConfig from '../config/database'

const models = [Buyer, Product, Shopping, TaxCoupons]

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
  }
}

export default new Database();