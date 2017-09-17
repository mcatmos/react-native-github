import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_FEED,
  SUCCESS_FEED
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: true,
  results: [],
  page: 0
})

const feed = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FEED:
      return {
        ...state,
        isFetching: true
      }
    break
    case SUCCESS_FEED:
    const feedMap = _.mapKeys(action.payload.results, 'id')
      return {
        ...state,
        isFetching: false,
        results: _.merge({}, state.results, feedMap)
      }
    break
    default:
      return state
  }
}

export default feed