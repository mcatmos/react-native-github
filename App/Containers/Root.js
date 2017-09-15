import React, { Component } from 'react'
import { NativeModules } from 'react-native'
import { 
    Router, 
    Scene,
    Stack
} from 'react-native-router-flux'
import {
    Home,
    Login,
    PullRequest,
    Reviews
} from '../Features/'
import { Colors } from '../Themes/'
import { Provider } from 'react-redux'
import createStore from '../Redux'

class Root extends Component {

  componentWillMount() {
    this.store = createStore()
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router>
            <Stack name="root">
                <Scene
                  navigationBarStyle={{backgroundColor: Colors.grey}}
                  titleStyle={{color: Colors.white}}
                  key={'login'}
                  initial={true}
                  component={Login}
                  hideNavBar={true}
                  title={'GitHub React Native'}
                />
                <Scene
                  navigationBarStyle={{backgroundColor: Colors.grey}}
                  titleStyle={{color: Colors.white}}
                  key={'home'}
                  back={false}
                  onBack={() => {}}
                  headerBackTitle={''}
                  component={Home}
                  title={'Home'}    
                />
                <Scene
                  navigationBarStyle={{backgroundColor: Colors.grey}}
                  titleStyle={{color: Colors.white}}
                  key={'pullrequests'}
                  component={PullRequest}
                  title={'Pull Request'}    
                />
                <Scene
                  navigationBarStyle={{backgroundColor: Colors.grey}}
                  titleStyle={{color: Colors.white}}
                  key={'reviewspullrequests'}
                  component={Reviews}
                  title={'Reviews'}    
                />

            </Stack>
        </Router>
      </Provider>
    )
  }
}

export default Root