import Sequelize from 'sequelize'

class TaxCoupons extends Sequelize.Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      date: Sequelize.DATE,
    }, {
      sequelize
    })
  }

}

export default TaxCoupons