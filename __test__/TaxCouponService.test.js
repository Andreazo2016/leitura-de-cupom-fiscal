const TaxCouponService = require('../src/service/TaxCouponService')
const TaxCouponRepositoryMock = require('./TaxCouponRepositoryMock')
const TaxCouponModelMock = require('./TaxCouponModelMock')


const sut = () => {

  const taxCouponModelMock = new TaxCouponModelMock()

  const taxCouponRepositoryMock = new TaxCouponRepositoryMock({ taxCouponModel: taxCouponModelMock })

  const taxCouponService = new TaxCouponService({ taxCouponRepository: taxCouponRepositoryMock })

  return {
    taxCouponModelMock,
    taxCouponRepositoryMock,
    taxCouponService
  }
}

describe('TaxService', () => {

  it('Should be able to call save method from  model', async () => {

    const { taxCouponRepositoryMock, taxCouponModelMock } = sut()


    const saveMethod = jest.spyOn(taxCouponModelMock, 'create')

    const name = 'tax-coupon-name'
    const url = '/some-url'
    const date = new Date()

    await taxCouponRepositoryMock.save({ name, url, date })

    expect(saveMethod).toHaveBeenCalled()

  })

  it('Should be able to call save method from repository', async () => {

    const { taxCouponModelMock, taxCouponRepositoryMock } = sut()

    const saveMethod = jest.spyOn(taxCouponModelMock, 'create')

    const name = 'tax-coupon-name'
    const url = '/some-url'
    const date = new Date()

    await taxCouponRepositoryMock.save({ name, url, date })

    expect(saveMethod).toHaveBeenCalled()
  })


  it('Should be able to call save method from repository with correct params', async () => {

    const { taxCouponModelMock, taxCouponRepositoryMock } = sut()

    const saveMethod = jest.spyOn(taxCouponModelMock, 'create')

    const name = 'tax-coupon-name'
    const url = '/some-url'
    const date = new Date()

    await taxCouponRepositoryMock.save({ name, url, date })

    expect(saveMethod).toHaveBeenCalledWith({
      name,
      url,
      date
    })

  })

  it('Should be able to create a new TaxCoupon', async () => {

    const { taxCouponService } = sut()

    const name = 'tax-coupon-name'
    const url = '/some-url'

    const response = await taxCouponService.save({ name, url })

    expect(response.id).toBeTruthy()
    expect(response.name).toBe(name)
    expect(response.date).toBeTruthy()
    expect(response.isProcessed).toBeFalsy()

  })

  it('Should be able to return an erro if the name was not provided', () => {

    const { taxCouponService } = sut()

    const url = '/some-url'

    const promise = taxCouponService.save({ url })

    expect(promise).rejects.toThrow()

  })

  it('Should be able to return an erro if the url was not provided', () => {

    const { taxCouponService } = sut()

    const name = 'tax-coupon-name'

    const promise = taxCouponService.save({ name })

    expect(promise).rejects.toThrow()

  })


})