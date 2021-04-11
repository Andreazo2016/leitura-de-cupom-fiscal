const Sequelize = require('sequelize')

class Buyer extends Sequelize.Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING
    }, {
      sequelize
    })
  }

}

module.exports = Buyer