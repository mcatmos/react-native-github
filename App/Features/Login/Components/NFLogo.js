import React from 'react'
import {
  View,
  Image
} from 'react-native'

import { NFLargeButton } from '../../../Components/'
import { BaseStyles } from '../../../Themes/'

const NFLoginForm = ({
  image
}) => {
  return (
    <View style={BaseStyles.centered}>
      <Image 
        source={{uri: image}} 
        resizeMode={'cover'}
        style={BaseStyles.logo}
      />
    </View>
  )
}

export default NFLoginForm