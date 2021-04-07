const GoogleVision = require('@google-cloud/vision')

class ImageProcessor {
  _imageUrl
  constructor(imageUrl) {
    this._imageUrl = imageUrl
  }

  async getTextFromImage() {

    if (!this._imageUrl) throw new Error('The imageUrl can not be null or undefinded!!')

    const client = new GoogleVision.ImageAnnotatorClient()

    const [result] = await client.documentTextDetection(this._imageUrl);

    const detectetions = result.textAnnotations;

    const textDetected = detectetions[0].description

    return textDetected
  }
}

module.exports = ImageProcessor