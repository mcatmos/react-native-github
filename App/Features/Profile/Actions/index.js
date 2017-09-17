export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const SUCCESS_PROFILE = 'SUCCESS_PROFILE'
export const ERROR_PROFILE = 'ERROR_PROFILE'

export const requestProfile = (username, password) => {
  return {
    type: REQUEST_PROFILE,
    payload: {
      username,
      password 
    }
  }
}

export const successProfile = (action) => {
  const { data } = action
  return {
    type: SUCCESS_PROFILE,
    payload: {
      results: data
    }
  }
}

export const failureProfile = () => {
  return {
    type: ERROR_PROFILE,
    payload: {
      error: true
    }
  }
}