import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_PULLREQUEST,
  SUCCESS_PULLREQUEST,
  FAILURE_PULLREQUEST
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0,
  error: false
})

const repos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PULLREQUEST:
      return {
        ...state,
        isFetching: true
      }
    break
    case SUCCESS_PULLREQUEST:
      return {
        ...state,
        isFetching: false,
        results: _.mapKeys(action.payload.results, 'id')
      }
    break
    case FAILURE_PULLREQUEST: 
      return {
        ...state,
        error: true,
        isFetching: false
      }
    break
    default:
      return state
  }
}

export default repos