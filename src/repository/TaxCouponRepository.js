class TaxCouponRepository {
  _taxCouponModel
  constructor({ taxCouponModel }) {
    this._taxCouponModel = taxCouponModel
  }

  async save({ name, url, date }) {
    const taxCouponCreated = await this._taxCouponModel.create({ name, url, date })
    return taxCouponCreated
  }
}

module.exports = TaxCouponRepository