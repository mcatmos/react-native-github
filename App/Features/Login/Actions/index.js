export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'

export const requestLogin = (username, password) => {
  return {
    type: REQUEST_LOGIN,
    payload: {
      username,
      password 
    }
  }
}

export const successLogin = (action) => {
  const { data } = action
  return {
    type: SUCCESS_LOGIN,
    payload: {
      results: data
    }
  }
}

export const failureLogin = () => {
  return {
    type: ERROR_LOGIN,
    payload: {
      error: true
    }
  }
}