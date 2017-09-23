import _ from 'lodash'

export const selectPullRequests = (state, id) => {
  if (state.pull_requests) {
    return Object.values(state.pull_requests.results)
  }
  return null
}