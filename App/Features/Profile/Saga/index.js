import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { 
  successLogin, 
  failureLogin 
} from '../Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

export function* requestProfile(api, action) {
  const { 
    username
  } = action.payload
  const response = yield call(api.requestLogin, username)

  if (response.ok) {
    
    yield put(successLogin(response))
    NavigationActions.tabBar()
  } else {
    yield put(failureLogin())
  }
}