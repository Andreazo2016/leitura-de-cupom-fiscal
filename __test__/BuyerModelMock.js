class BuyerModelMock {
  async save({ name }) {
    return {
      id: 'some-uuid',
      name: 'some-buyer-name'
    }
  }
}

module.exports = BuyerModelMock