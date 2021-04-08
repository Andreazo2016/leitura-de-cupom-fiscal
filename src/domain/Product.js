class Product {
  _code
  _name
  _price
  _quantity
  _unit

  constructor([code, name, price, quantity, unit]) {
    this._price = price.replace(',', '.')
    this._code = code
    this._name = name
    this._quantity = quantity
    this._unit = unit
  }

  get price() {
    return this._price
  }

  get code() {
    return this._code
  }

  get name() {
    return this._name
  }
  get quantity() {
    return this._quantity
  }
  get unit() {
    return this._unit
  }

}

module.exports = Product