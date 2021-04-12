class TaxCouponModelMock {
  async create({ name, url, date }) {
    return {
      id: 'some-uuid',
      name: 'tax-coupon-name',
      url: 'http://some-url.com',
      isProcessed: false,
      date: new Date()
    }
  }
}

module.exports = TaxCouponModelMock