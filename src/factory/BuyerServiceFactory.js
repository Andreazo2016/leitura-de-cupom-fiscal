import BuyerRepostory from '../repository/BuyerRepository'
import BuyerService from '../service/BuyerService'
import Buyer from '../database/models/Buyer'

class BuyerServiceFactory {

  static create() {

    const buyerRepository = new BuyerRepostory({ buyerModel: Buyer })
    const buyerService = new BuyerService({ buyerRepository })
    return buyerService
  }
}

export default BuyerServiceFactory