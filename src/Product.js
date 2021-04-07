class Product {
  _cod
  _name
  _price

  constructor([cod, name, price]) {
    this._price = price.replace(',', '.')
    this._cod = cod
    this._name = name
  }

  get price() {
    return this._price
  }

  get cod() {
    return this._cod
  }

  get name() {
    return this._name
  }

}

module.exports = Product