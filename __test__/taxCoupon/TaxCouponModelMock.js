class TaxCouponModelMock {
  _database = []
  async create({ name, path, date }) {
    const taxCoupon = {
      id: 'some-uuid',
      name,
      path,
      isProcessed: false,
      date
    }

    const taxFound = this._database.find(tax => tax.path === path)

    if (taxFound) throw new Error(`path can not be duplicated`)

    this._database.push(taxCoupon)
    return taxCoupon
  }
}

export default TaxCouponModelMock