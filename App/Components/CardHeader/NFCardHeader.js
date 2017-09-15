import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Colors } from '../../Themes/'

const NFCardHeader = ({label}) => {
  return (
    <View style={{borderBottomColor: Colors.snow, borderBottomWidth: 1}} >
      <Text style={{color: Colors.grey}}>{label}</Text>
    </View>
  )
}

export default NFCardHeader