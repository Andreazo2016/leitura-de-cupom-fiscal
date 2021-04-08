class Product {
  _cod
  _name
  _price
  _qtd
  _unit

  constructor([cod, name, price, qtd, unit]) {
    this._price = price.replace(',', '.')
    this._cod = cod
    this._name = name
    this._qtd = qtd
    this._unit = unit
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
  get qtd() {
    return this._qtd
  }
  get unit() {
    return this._unit
  }

}

module.exports = Product