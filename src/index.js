const path = require('path')
const ImageProcessor = require('./ImageProcessor')
const ProductProcessor = require('./ProductProcessor')


  ;
(async () => {

  const imageUrl = path.resolve(__dirname, '..', 'tmp', '01.jpeg')

  const imageProcessor = new ImageProcessor(imageUrl)

  const text = await imageProcessor.getTextFromImage()

  const productProcessor = new ProductProcessor(text)

  const products = productProcessor.getProducts()

})()