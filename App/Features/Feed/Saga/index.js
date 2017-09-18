import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { 
  successFeed,
  failureFeed
} from '../Actions/'

export function* requestFeed(api, action) {
  const { 
    owner
  } = action.payload
  const response = yield call(api.requestFeed, owner)
  if (response.ok) {
    yield put(successFeed(response))
  } else {
    yield put(failureFeed())
  }
}