import { readdir } from 'fs/promises'

class CupomService {

  _url
  constructor(url) {
    this._url = url
  }

  async getcuponsFromDirectory() {
    const files = await readdir(this._url)
    return files
  }
}

export default CupomService