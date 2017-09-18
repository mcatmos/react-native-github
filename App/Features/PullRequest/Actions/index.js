export const REQUEST_PULLREQUEST = 'REQUEST_PULLREQUEST'
export const SUCCESS_PULLREQUEST = 'SUCCESS_PULLREQUEST'
export const FAILURE_PULLREQUEST = 'FAILURE_PULLREQUEST'

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

export const failurePullRequests = (action) => {
  return {
    type: FAILURE_PULLREQUEST,
    payload: {
      error: true
    }
  }
}