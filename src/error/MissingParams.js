import BaseAppError from './BaseAppError'
class MissingParams extends BaseAppError {
  constructor(message) {
    super(400, message)
  }
}

export default MissingParams