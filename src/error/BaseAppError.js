class BaseAppError extends Error {
  _status
  constructor(status, message) {
    super(message)
    this._status = status
  }
}

export default BaseAppError