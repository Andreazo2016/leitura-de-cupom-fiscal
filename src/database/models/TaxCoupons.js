import Sequelize, { Model } from 'sequelize'

class TaxCoupons extends Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      url: Sequelize.STRING,
      date: Sequelize.DATE,
    }, {
      sequelize
    })
  }

}

export default TaxCoupons