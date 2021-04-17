import MissingParams from '../error/MissingParams'

class TaxCouponService {

  _taxCouponRepository
  constructor({ taxCouponRepository }) {
    this._taxCouponRepository = taxCouponRepository
  }

  async save({ name, path }) {

    if (!name || !path) throw new MissingParams('Missing params')

    const taxCoupon = await this._taxCouponRepository.save({
      name,
      path,
      date: new Date(Date.now())
    })

    return taxCoupon
  }
}

export default TaxCouponService