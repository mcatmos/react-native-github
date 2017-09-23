import React from 'react'
import {
  Scene,
  Router,
  Stack
} from 'react-native-router-flux'
import {
  Repos,
  Login,
  PullRequest,
  Reviews,
  Feed,
  Profile
} from '../Features/'
import { Colors } from '../Themes/'
import Icon from 'react-native-vector-icons/Octicons'

const renderIcon = ({tintColor}, name) => {
  return (
    <Icon 
      name={name}
      style={{margin: 5}}
      color={tintColor}
      size={30}
    />
  )
}

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
            tabs={true}
            showLabel={false}
            swipeEnabled={true}
            activeTintColor={Colors.blue}>
            <Scene 
              key="feed_tab"
              icon={(props) => renderIcon(props, 'flame')}>
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
              key="repos_tab"
              tabBarLabel={'Repos'}
              icon={(props) => renderIcon(props,'repo')}>
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'repos'}
                back={false}
                onBack={() => {}}
                rightTitle={''}
                onRight={() => {}}
                headerBackTitle={''}
                component={Repos}
                title={'Repos'}    
              />
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'pullrequests'}
                component={PullRequest}
                title={'Pull Requests'}    
              />
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'reviewspullrequests'}
                component={Reviews}
                title={'Pull Requests'}    
              />
            </Scene>
            <Scene 
              key="profile_tab"
              tabBarLabel={'Profile'}
              icon={(props) => renderIcon(props,'person')}>
              <Scene
                navigationBarStyle={{backgroundColor: Colors.grey}}
                titleStyle={{color: Colors.white}}
                key={'profile'}
                component={Profile}
                title={'Profile'}    
              />
            </Scene>
        </Scene>
      </Stack>
    </Router>
  )
}

export default NavigatorRouter
