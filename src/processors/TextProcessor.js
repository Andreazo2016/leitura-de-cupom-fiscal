const Product = require('./Product')

class TextProcessor {
  _content
  constructor(content) {
    this._content = content
  }

  extractProductData() {

    const data = this._content.split('&').filter(line => line)
    this._content = data.map(line => {
      const regexToGetCodAndName = /(?<=^\d{3}\s)\d+(\s[a-zA-Z]+)+/gm
      const regexToGetPrice = /\d+[.,]\d{2}$/gm
      const regexToGetUnitAndQtd = /(\d+(\.|,))?(\d+G|\d+L|\d+)\s(KG|UN|UM)(?=\sX)/gm
      const productInfo = line.trim().match(regexToGetCodAndName)
      const priceInfo = line.trim().match(regexToGetPrice)
      const matched = line.trim().match(regexToGetUnitAndQtd)
      const [qtd, unit] = matched ? matched.join('').split(' ') : ['not found', 'not found']
      return [productInfo.join(''), priceInfo.join(''), qtd, unit]
    })

    return this
  }

  unifiedInColumns() {

    const [_, ...columns] = this._content.split('\n')

    const regexToTextIfStringStartWithOnlyThreeNumbers = /^\d{3}/

    this._content = columns.reduce((prev, next) => {
      const [startedString, _] = next.split(' ')
      const testString = regexToTextIfStringStartWithOnlyThreeNumbers.test(startedString)
      if (testString) {
        return prev.concat('&'.concat(next))
      } else {
        return prev.concat(' '.concat(next))
      }
    }, '')

    return this

  }

  removeKGChar() {
    this._content = this._content.map(line => line.map(l => l.replace(/\sKG/gm, " ")))
    return this
  }

  divideInColumns() {
    const SPACE = ' '
    this._content = this._content.map(line => {
      const [rest, price, qtd, unit] = line
      const [cod, ...name] = rest.split(SPACE)
      return [
        cod,
        name.join(' '),
        price,
        qtd,
        unit
      ]
    })
    return this
  }

  mapToProduct() {
    this._content = this._content.map(line => new Product(line))
    return this
  }

  build() {
    return this._content
  }
}

module.exports = TextProcessor