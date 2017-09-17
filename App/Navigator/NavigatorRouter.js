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
  Feed,
  Profile
} from '../Features/'
import { Colors } from '../Themes/'

const NavigatorRouter = () => {
  return (
    <Router>
      <Stack 
        hideNavBar={true}
        name="root">
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
            key="tabBar"
            tabs={true}>
            <Scene 
              key="feed_tab"
              tabBarLabel={'Feed'}>
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
                title={'Feed'}    
              />
            </Scene>
            <Scene 
              key="home_tab"
              tabBarLabel={'Home'}>
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
            </Scene>
            <Scene 
              key="profile_tab"
              tabBarLabel={'Profile'}>
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'profile'}
                component={Profile}
                title={'Profile'}    
              />
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'reviewspullrequests'}
                component={Reviews}
                title={'Pull Requests'}    
              />
            </Scene>
        </Scene>
      </Stack>
    </Router>
  )
}

export default NavigatorRouter
