import immutablePersistenceTransform from '../../Services/Persistence/'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: AsyncStorage,
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST