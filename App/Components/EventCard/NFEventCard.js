import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native'

import { Colors, BaseStyles } from '../../Themes/'
import TimeAgo from '../../Utils/TimeHandler'
import NFEventCardStyles from './Styles/Styles'

const NFEventCard = ({
  created_at,
  payload,
  repo,
  actor,
  type
}) => {
  return (
    <TouchableOpacity 
      style={NFEventCardStyles.container}
      onPress={() => console.log('test')}>
      <TimeAgo style={BaseStyles.textDetail} time={created_at} />
      <View style={{flexDirection: 'row', paddingTop: 5, paddingRight: 25}}>
        <Image 
          source={{uri: actor.avatar_url}} 
          resizeMode={'cover'} 
          style={BaseStyles.avatarSmall}
        />
        <Text style={{paddingHorizontal: 5}}>
          <Text style={[BaseStyles.cardTitle, {fontSize: 14}]}>{actor.display_login} </Text> 
          <Text>{type} to </Text> 
          <Text style={[BaseStyles.cardTitle, {fontSize: 14}]}>{payload.ref} </Text> 
          at
          <Text style={[BaseStyles.cardTitle, {fontSize: 14}]}> {repo.name}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}



export default NFEventCard