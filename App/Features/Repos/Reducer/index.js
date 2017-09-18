import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_REPOS,
  SUCCESS_REPOS,
  FAILURE_REPOS,
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: false,
  results: [],
  page: 0,
  error: false
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
    case FAILURE_REPOS:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default repos