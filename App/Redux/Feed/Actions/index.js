export const REQUEST_FEED = 'REQUEST_FEED'
export const SUCCESS_FEED = 'SUCCESS_PFEED'

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