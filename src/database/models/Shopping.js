import Sequelize from 'sequelize'

class Shopping extends Sequelize.Model {

  static init(sequelize) {
    super.init({
      buyer_id: Sequelize.UUID,
      tax_coupon_id: Sequelize.UUID,
      date: Sequelize.DATE,
    }, {
      sequelize
    })
  }

}

export default Shopping