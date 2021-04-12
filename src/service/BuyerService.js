class BuyerService {

  _buyerRepository
  constructor({ buyerRepository }) {
    this._buyerRepository = buyerRepository
  }

  async save({ name }) {
    if (!name) throw new Error('Missing param')
    const buyer = await this._buyerRepository.save({ name })
    return buyer
  }
}

module.exports = BuyerService