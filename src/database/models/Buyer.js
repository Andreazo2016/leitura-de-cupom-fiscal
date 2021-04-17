import Sequelize from 'sequelize'

class Buyer extends Sequelize.Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING
    }, {
      sequelize
    })
  }

}

export default Buyer