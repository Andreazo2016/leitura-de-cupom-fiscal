const TextProcessor = require('./TextProcessor')

class ProductProcessor {

  _content
  constructor(content) {
    this._content = content
  }

  getProductsFromImage() {

    return new TextProcessor(this._content)
      .unifiedInColumns()
      .extractProductData()
      .removeKGChar()
      .divideInColumns()
      .mapToProduct()
      .build()
  }
}

module.exports = ProductProcessor