import React from 'react'
import {
  Scene,
  Router,
  Stack
} from 'react-native-router-flux'
import {
  Home,
  Login,
  PullRequest,
  Reviews,
  Feed
} from '../Features/'
import { Colors } from '../Themes/'

const NavigatorRouter = () => {
  return (
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
          key={'feed'}
          back={false}
          onBack={() => {}}
          rightTitle={''}
          onRight={() => {}}
          headerBackTitle={''}
          component={Feed}
          title={'Home'}    
        />
        <Scene
          navigationBarStyle={{backgroundColor: Colors.grey}}
          titleStyle={{color: Colors.white}}
          key={'home'}
          back={false}
          onBack={() => {}}
          rightTitle={''}
          onRight={() => {}}
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
  )
}

export default NavigatorRouter
