import React from 'react'
import {
  View,
  TextInput,
  Text
} from 'react-native'

import { NFLargeButton } from '../../../Components/'
import { BaseStyles } from '../../../Themes/'

const NFLoginForm = ({
  action,
  setUserName,
  setPassword
}) => {
  return (
    <View style={BaseStyles.form}>
      <Text style={BaseStyles.label}>Username or email address</Text>
      <TextInput 
        onChangeText={(text) => setUserName(text)}
        style={BaseStyles.textInput} 
      />
      <Text style={BaseStyles.label}>Password</Text>
      <TextInput 
        onChangeText={(text) => setPassword(text)}
        style={BaseStyles.textInput} 
        secureTextEntry={true}
      />
      <NFLargeButton 
        action={() => action()}
        label={'Login'}
      />
    </View>
  )
}

export default NFLoginForm