export const REQUEST_PULLREQUEST = 'REQUEST_PULLREQUEST'
export const SUCCESS_PULLREQUEST = 'SUCCESS_PULLREQUEST'
export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const SUCCESS_REVIEWS = 'SUCCESS_REVIEWS'

export const requestPullRequests = (id, repo, owner) => {
  return {
    type: REQUEST_PULLREQUEST,
    payload: {
      id: id,
      repo: repo,
      owner: owner
    }
  }
}

export const successPullRequests = (action, id) => {
  const { data } = action
  return {
    type: SUCCESS_PULLREQUEST,
    payload: {
      results: data,
      id: id
    }
  }
}

export const requestReviews = (owner, repo, id, pullrequestId) => {
  console.log(id)
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