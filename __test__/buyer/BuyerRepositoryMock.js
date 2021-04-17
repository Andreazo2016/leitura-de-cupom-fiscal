class BuyerRepositoryMock {
  _buyerModel
  constructor({ buyerModel }) {
    this._buyerModel = buyerModel
  }

  async save({ name }) {
    const buyer = this._buyerModel.save({ name })
    return buyer
  }
}

export default BuyerRepositoryMock