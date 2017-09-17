import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native'
import { 
  Colors, 
  BaseStyles, 
  Fonts 
} from '../../Themes/'

import NFCommentCardStyles from './Styles/Styles'


const NFCommentCard = ({
  body,
  status,
  submitted_at,
  url,
  user
}) => {
  return (
    <TouchableOpacity 
      style={NFCommentCardStyles.container}
      onPress={() => Linking.openURL(url)}>
      <View style={NFCommentCardStyles.rightContainer}>
        <Image 
          source={{uri: user.avatar_url}} 
          style={NFCommentCardStyles.avatar} 
          resizeMode={'contain'}
        />
        <Text>{user.login}</Text>
      </View>
      <Text style={[BaseStyles.cardTitle, {fontSize: Fonts.small}]}>{status}</Text>
    </TouchableOpacity>
  )
}



export default NFCommentCard