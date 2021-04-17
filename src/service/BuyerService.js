import MissingParams from '../error/MissingParams'
class BuyerService {

  _buyerRepository
  constructor({ buyerRepository }) {
    this._buyerRepository = buyerRepository
  }

  async save({ name }) {
    if (!name) throw new MissingParams('Missing name param')
    const buyer = await this._buyerRepository.save({ name })
    return buyer
  }
}

export default BuyerService