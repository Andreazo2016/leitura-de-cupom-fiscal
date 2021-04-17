import TaxCouponRepository from '../repository/TaxCouponRepository'
import TaxCouponService from '../service/TaxCouponService'
import TaxCoupons from '../database/models/TaxCoupons'

class TaxCouponServiceFactory {

  static create() {
    const taxCouponRepository = new TaxCouponRepository({ taxCouponModel: TaxCoupons })
    const taxCouponService = new TaxCouponService({ taxCouponRepository })
    return taxCouponService
  }
}

export default TaxCouponServiceFactory