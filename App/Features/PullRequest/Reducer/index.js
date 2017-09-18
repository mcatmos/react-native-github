import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_PULLREQUEST,
  SUCCESS_PULLREQUEST,
  REQUEST_REVIEWS,
  SUCCESS_REVIEWS
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0
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
    default:
      return state
  }
}

export default repos