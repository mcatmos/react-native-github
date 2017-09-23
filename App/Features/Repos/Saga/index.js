import { call, put, takeLatest, all } from 'redux-saga/effects'
import { 
  successRepos,
  failureRepos
} from '../Actions/'

export function* requestRepos(api) {
  const response = yield call(api.requestRepos)
  if (response.ok) {
    yield put(successRepos(response))
  } else {
    yield put(failureRepos(response.error))
  }
}