import _ from 'lodash'

export const REQUEST_REPOS = 'REQUEST_REPOS'
export const SUCCESS_REPOS = 'SUCCESS_REPOS'
export const ERROR_REPOS = 'ERROR_REPOS'

export const requestRepos = () => {
  return {
    type: REQUEST_REPOS
  }
}

export const successRepos = (action) => {
  const { data } = action
  return {
    type: SUCCESS_REPOS,
    payload: {
      results: data
    }
  }
}