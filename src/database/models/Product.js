import Sequelize from 'sequelize'

class Product extends Sequelize.Model {

  static init(sequelize) {
    super.init({
      code: Sequelize.STRING,
      name: Sequelize.STRING,
      price: Sequelize.DOUBLE,
      quantity: Sequelize.INTEGER,
      unit: Sequelize.INTEGER,
      shopping_id: Sequelize.UUID,
    }, {
      sequelize
    })
  }

}

export default Product