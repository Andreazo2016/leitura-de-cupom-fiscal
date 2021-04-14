const BuyerService = require('../../src/service/BuyerService')
const BuyerRepositoryMock = require('./BuyerRepositoryMock')
const BuyerModelMock = require('./BuyerModelMock')
const MissingParams = require('../../src/error/MissingParams')



const sut = () => {

  const buyerModelMock = new BuyerModelMock()

  const buyerRepositoryMock = new BuyerRepositoryMock({ buyerModel: buyerModelMock })

  const buyerService = new BuyerService({ buyerRepository: buyerRepositoryMock })

  return {
    buyerModelMock,
    buyerRepositoryMock,
    buyerService
  }
}

describe('BuyerService', () => {

  it('Should be able to call save method from  model', async () => {

    const { buyerRepositoryMock, buyerService } = sut()


    const saveMethod = jest.spyOn(buyerRepositoryMock, 'save')

    const name = 'some-buyer-name'

    await buyerService.save({ name })

    expect(saveMethod).toHaveBeenCalled()

  })

  it('Should be able to call save method from repository', async () => {

    const { buyerService, buyerRepositoryMock } = sut()

    const saveMethod = jest.spyOn(buyerRepositoryMock, 'save')

    const name = 'some-buyer-name'

    await buyerService.save({ name })

    expect(saveMethod).toHaveBeenCalled()

  })


  it('Should be able to call save method from repository with correct params', async () => {


    const { buyerService, buyerRepositoryMock } = sut()

    const saveMethod = jest.spyOn(buyerRepositoryMock, 'save')

    const name = 'some-buyer-name'

    await buyerService.save({ name })

    expect(saveMethod).toHaveBeenCalled()

    expect(saveMethod).toHaveBeenCalledWith({ name })

  })

  it('Should be able to create a new buyer', async () => {

    const name = 'some-buyer-name'

    const { buyerService } = sut()

    const buyerCreated = await buyerService.save({ name })

    expect(buyerCreated.id).toBeTruthy()

    expect(buyerCreated.name).toBe(name)

  })

  it('Should be throw an erro if name is not provided', () => {
    const { buyerService } = sut()
    const promise = buyerService.save({})
    expect(promise).rejects.toBeInstanceOf(MissingParams)
  })
})