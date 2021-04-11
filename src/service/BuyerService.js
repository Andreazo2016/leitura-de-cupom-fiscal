class BuyerService {

  _buyerRepository
  constructor({ buyerRepository }) {
    this._buyerRepository = buyerRepository
  }

  async save({ name }) {
    const buyer = await this._buyerRepository.save({ name })
    return buyer
  }
}

module.exports = BuyerService