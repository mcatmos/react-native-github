import Immutable from 'seamless-immutable'
import {
  SUCCESS_REVIEWS,
  REQUEST_REVIEWS
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0
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
  break
    default:
      return state
  }
}

export default reviews

