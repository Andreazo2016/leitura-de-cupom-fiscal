const MissingParams = require('../error/MissingParams')

class TaxCouponService {

  _taxCouponRepository
  constructor({ taxCouponRepository }) {
    this._taxCouponRepository = taxCouponRepository
  }

  async save({ name, url }) {

    if (!name || !url) throw new MissingParams('Missing params')

    const taxCoupon = await this._taxCouponRepository.save({
      name,
      url,
      date: new Date(Date.now)
    })
    return taxCoupon
  }
}

module.exports = TaxCouponService