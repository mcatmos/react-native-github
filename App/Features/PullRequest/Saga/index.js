import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import {
  successPullRequests,
  failurePullRequests
} from '../Actions/'

export function* requestPullRequests(api, action) {
  const { 
    repo, 
    owner,
    id
  } = action.payload
  const response = yield call(api.requestPullRequests, repo, owner)
  if (response.ok) {
    yield put(successPullRequests(response, id))
  } else {
    yield put(failurePullRequests(response.error))
  }
}