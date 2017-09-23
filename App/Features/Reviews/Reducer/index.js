import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  SUCCESS_REVIEWS,
  REQUEST_REVIEWS,
  FAILURE_REVIEWS
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0,
  error: false
})


const reviews = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_REVIEWS:
      return {
        ...state,
        isFetching: true
      }
    break
    case SUCCESS_REVIEWS:
      return {
        ...state,
        isFetching: false,
        results: _.mapKeys(action.payload.results, 'id')
      }
    break
    case FAILURE_REVIEWS:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default reviews

