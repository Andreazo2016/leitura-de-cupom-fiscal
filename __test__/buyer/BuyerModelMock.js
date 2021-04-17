class BuyerModelMock {
  async save({ name }) {
    return {
      id: 'some-uuid',
      name: 'some-buyer-name'
    }
  }
}

export default BuyerModelMock