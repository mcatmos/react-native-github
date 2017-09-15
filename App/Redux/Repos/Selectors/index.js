export const selectRepos = (state) => {
  return Object.values(state.repos.results)
}