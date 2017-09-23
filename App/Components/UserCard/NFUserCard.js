import React from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'
import { BaseStyles, Colors } from '../../Themes/'
import Icon from 'react-native-vector-icons/Octicons'

const NFUserCard = ({
  avatarUrl,
  bio,
  email,
  followers,
  location,
  login,
  name,
  public_repos
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: avatarUrl}} style={BaseStyles.avatarBig}/>
      <View style={styles.rightContainer}>
        <Text style={BaseStyles.cardTitle}>{name}</Text>
        <Text style={styles.text}>{login}</Text>
        <Text numberOfLines={4} style={[styles.text,{paddingVertical: 10}]}>{bio}</Text>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Icon name='location' size={20} color={Colors.grey}/>
          <Text style={styles.text}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white, 
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 10, 
    borderBottomColor: Colors.snow, 
    borderBottomWidth: 1
  },
  rightContainer: {
    flex: 1, 
    justifyContent: 'center', 
    paddingLeft: 10
  },
  text: {
    color: Colors.grey
  }
})

export default NFUserCard


