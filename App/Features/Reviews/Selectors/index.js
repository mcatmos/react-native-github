import _ from 'lodash'

export const selectReviews = (state, id) => {
  if (state.reviews) {
    return Object.values(state.reviews.results)
  }
  return null
}