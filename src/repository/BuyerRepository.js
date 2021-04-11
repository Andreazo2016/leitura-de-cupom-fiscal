class BuyerRepostory {
  _buyerModel
  constructor({ buyerModel }) {
    this._buyerModel = buyerModel
  }

  async save({ name }) {
    const buyerCreated = await this._buyerModel.create({ name })
    return buyerCreated
  }
}

module.exports = BuyerRepostory