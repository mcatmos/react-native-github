export const REQUEST_FEED = 'REQUEST_FEED'
export const SUCCESS_FEED = 'SUCCESS_FEED'
export const FAILURE_FEED = 'FAILURE_FEED'

export const requestFeed = (owner) => {
  return {
    type: REQUEST_FEED,
    payload: {
      owner
    }
  }
}

export const successFeed = (action, id) => {
  const { data } = action
  return {
    type: SUCCESS_FEED,
    payload: {
      results: data,
      id: id
    }
  }
}

export const failureFeed = (action) => {
  return {
    type: FAILURE_FEED,
    payload: {
      error: true
    }
  }
}