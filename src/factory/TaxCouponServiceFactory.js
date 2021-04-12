const TaxCouponRepository = require('../repository/TaxCouponRepository')
const TaxCouponService = require('../service/TaxCouponService')
const TaxCoupons = require('../database/models/TaxCoupons')

class TaxCouponServiceFactory {

  static create() {
    const taxCouponRepository = new TaxCouponRepository({ taxCouponModel: TaxCoupons })
    const taxCouponService = new TaxCouponService({ taxCouponRepository })
    return taxCouponService
  }
}

module.exports = TaxCouponServiceFactory