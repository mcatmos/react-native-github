export const selectFeed = (state, id) => {
  if (state.feed) {
    return Object.values(state.feed.results)
  }
  return null
}
