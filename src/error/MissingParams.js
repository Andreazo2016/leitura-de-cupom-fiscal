const BaseAppError = require('./BaseAppError')
class MissingParams extends BaseAppError {
  constructor(message) {
    super(400, message)
  }
}

module.exports = MissingParams