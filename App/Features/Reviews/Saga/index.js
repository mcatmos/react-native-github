import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { 
  successReviews
} from '../Actions/'

export function* requestReviews(api, action) {
  const { 
    repo, 
    owner,
    id
  } = action.payload

  const response = yield call(api.requestReviews, repo, owner, id)
  if (response.ok) {
    yield put(successReviews(response))
  }
}