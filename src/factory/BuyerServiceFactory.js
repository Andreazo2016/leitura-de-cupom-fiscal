const BuyerRepostory = require('../repository/BuyerRepository')
const BuyerService = require('../service/BuyerService')
const Buyer = require('../database/models/Buyer')

class BuyerServiceFactory {

  static create() {

    const buyerRepository = new BuyerRepostory({ buyerModel: Buyer })
    const buyerService = new BuyerService({ buyerRepository })
    return buyerService
  }
}

module.exports = BuyerServiceFactory