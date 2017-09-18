import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_REPOS,
  REQUEST_PULLREQUEST,
  SUCCESS_REPOS,
  SUCCESS_PULLREQUEST,
  ERROR_REPOS,
  REQUEST_COMMENTS,
  SUCCESS_COMMENTS
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: false,
  results: [],
  page: 0
})

const repos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        isFetching: true
      }
    break
    case SUCCESS_REPOS: 
      return {
        ...state,
        isFetching: false,
        results: _.mapKeys(action.payload.results, 'id')
      }
    break
    default:
      return state
  }
}

export default repos