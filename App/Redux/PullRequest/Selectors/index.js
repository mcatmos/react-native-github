import _ from 'lodash'

export const selectPullRequests = (state, id) => {
  if (state.pull_requests) {
    return Object.values(state.pull_requests.results)
  }
  return null
}

export const selectReviews = (state, pullrequestId) => {
  if (state.pull_requests.results[pullrequestId].reviews_results) {
    const results = Object.values(state.pull_requests.results[pullrequestId].reviews_results)
    return _.sortBy(results, 'submitted_at')
  } else {
    return null
  }
}