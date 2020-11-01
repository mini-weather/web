
function getMessage (error, key) {
  if (typeof error === 'string') {
    if (error.indexOf('This field') === 0) {
      return error.replace('This field', key)
    }
    if (error.indexOf('این فیلد') === 0) {
      return error.replace('این فیلد', key)
    }
    return error
  } else if (typeof error === 'object') {
    if (Array.isArray(error) && error.length > 0) {
      return getMessage(error[0], key)
    } else if (!Array.isArray(error)) {
      return getMessage(error[Object.keys(error)[0]], Object.keys(error)[0])
    }
  }
  return ''
}

class BaseResource {
  constructor () {
    this.baseUrl = '/api'
    this.getMessage = this.getMessage.bind(this)
  }

  getMessage (error) {
    return getMessage(error)
  }

  getHeaders (lang) {
    let headers = {
      'Content-Type': 'application/json'
    }

    // let token = reactLocalStorage.get('impersonateToken', null)
    // if (token) {
    //   headers['Authorization'] = token
    // }
    // headers['Accept-Language'] = reactLocalStorage.get('lang', 'fa')
    return {
      'headers': headers
    }
  }

  successHandler (error, msg) {
    // let message
    // if (msg) {
    //   message = (<FormattedMessage id={msg} />)
    // } else if (typeof error === 'string') {
    //   message = error
    // } else if (typeof error === 'object' && error['message']) {
    //   message = error['message']
    // } else {
    //   message = (<FormattedMessage id='general.requestSucceed' />)
    // }
    // // (message, 'success')
    // toast.success(message, {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // })
  }

  errorHandler (error) {
    // let message
    // message = getMessage(error)
    // if (!message) {
    //   message = (<FormattedMessage id='general.requestFailed' />)
    // } else if (message.indexOf('general.error.') === 0) {
    //   message = (<FormattedMessage id={message} />)
    // }

    // toast.error(message, {
    //   position: toast.POSITION.BOTTOM_RIGHT
    // })
  }
}

export default BaseResource
