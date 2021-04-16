const TaxCouponService = require('../../src/service/TaxCouponService')
const TaxCouponRepositoryMock = require('./TaxCouponRepositoryMock')
const TaxCouponModelMock = require('./TaxCouponModelMock')
const MissingParams = require('../../src/error/MissingParams')


const makeSut = () => {

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

  it('Should be able to call save method in repository', async () => {

    const { taxCouponService, taxCouponRepositoryMock } = makeSut()

    const saveMethod = jest.spyOn(taxCouponRepositoryMock, 'save')

    const name = 'tax-coupon-name'
    const path = '/some-path'

    await taxCouponService.save({ name, path })

    expect(saveMethod).toHaveBeenCalled()
  })


  it('Should be able to call save method in repository with correct params', async () => {

    const { taxCouponService, taxCouponRepositoryMock } = makeSut()

    const saveMethod = jest.spyOn(taxCouponRepositoryMock, 'save')

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 3, 16).getTime()
    })

    const name = 'tax-coupon-name'
    const path = '/some-path'
    const date = new Date(2021, 3, 16)


    await taxCouponService.save({ name, path })

    expect(saveMethod).toHaveBeenCalledWith({
      name,
      path,
      date
    })

  })

  it('Should be able to create a new TaxCoupon', async () => {

    const { taxCouponService } = makeSut()

    const name = 'tax-coupon-name'
    const path = '/some-path'

    const response = await taxCouponService.save({ name, path })

    expect(response.id).toBeTruthy()
    expect(response.name).toBe(name)
    expect(response.date).toBeTruthy()
    expect(response.isProcessed).toBeFalsy()

  })

  it('Should be able to return an erro if the name was not provided', () => {

    const { taxCouponService } = makeSut()

    const path = '/some-path'

    const promise = taxCouponService.save({ path })

    expect(promise).rejects.toBeInstanceOf(MissingParams)
  })

  it('Should be able to return an erro if the path was not provided', () => {

    const { taxCouponService } = makeSut()

    const name = 'tax-coupon-name'

    const promise = taxCouponService.save({ name })

    expect(promise).rejects.toBeInstanceOf(MissingParams)

  })

  it('Should be able to throw if the path is duplicated', async () => {

    const { taxCouponService } = makeSut()


    const name = 'tax-coupon-name'
    const other_name = 'other-tax-coupon-name'
    const path = '/some-path'

    await taxCouponService.save({ name, path })

    const promise = taxCouponService.save({ name: other_name, path })

    expect(promise).rejects.toThrow()

  })


})
