import React, { Component } from 'react'
import { NativeModules } from 'react-native'
import { 
    Router, 
    Scene,
    Stack
} from 'react-native-router-flux'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import NavigatorRouter from '../Navigator/NavigatorRouter.js'

class Root extends Component {

  componentWillMount() {
    this.store = createStore()
  }

  render() {
    return (
      <Provider store={this.store}>
        <NavigatorRouter />
      </Provider>
    )
  }
}

export default Root