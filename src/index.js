const path = require('path')
const ImageProcessor = require('./ImageProcessor')
const ProductProcessor = require('./ProductProcessor')
const TextProcessor = require('./TextProcessor')


  ;
(async () => {

  const imageUrl = path.resolve(__dirname, '..', 'tmp', 'nota-fiscal.jpeg')

  const imageProcessor = new ImageProcessor(imageUrl)

  const text = await imageProcessor.getTextFromImage()

  const response = new TextProcessor(text)

  const productProcessor = new ProductProcessor(text)

  const products = productProcessor.getProductsFromImage()

})()