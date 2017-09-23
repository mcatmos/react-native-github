export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const SUCCESS_REVIEWS = 'SUCCESS_REVIEWS'
export const FAILURE_REVIEWS = 'FAILURE_REVIEWS'

export const requestReviews = (owner, repo, id, pullrequestId) => {
  return {
    type: REQUEST_REVIEWS,
    payload: {
      owner,
      repo,
      id,
      pullrequestId
    }
  }
}

export const successReviews = (action, repo, pullrequestId) => {
  const { data } = action
  return {
    type: SUCCESS_REVIEWS,
    payload: {
      results: data,
      pullrequestId
    }
  }
}

export const failureReviews = (action) => {
  const { error } = action
  return {
    type: FAILURE_REVIEWS,
    payload: {
      error
    }
  }
}