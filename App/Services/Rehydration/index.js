import ReduxPersist from '../../Config/Persistence/'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import { startup } from '../../Redux/Application/Actions/'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig
  //const startup = () => store.dispatch(startup())

  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      persistStore(store, config, startup).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config, startup)
    }
  }).catch(() => {
    persistStore(store, config, startup)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default {updateReducers}