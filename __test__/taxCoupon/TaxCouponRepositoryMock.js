class TaxCouponRepositoryMock {
  _taxCouponModel
  constructor({ taxCouponModel }) {
    this._taxCouponModel = taxCouponModel
  }

  async save({ name, path, date }) {
    const taxCouponCreated = await this._taxCouponModel.create({ name, path, date })
    return taxCouponCreated
  }
}

module.exports = TaxCouponRepositoryMock