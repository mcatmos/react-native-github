import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import {
  Colors,
  BaseStyles,
  Fonts
} from '../../Themes'

import Icon from 'react-native-vector-icons/Octicons'

const NFSmallCard = ({
  icon,
  label,
  value
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Icon 
          name={icon} 
          size={20} 
          color={Colors.grey}
          style={styles.icon} 
        />
        <Text>{label}</Text>
      </View>
      <View style={BaseStyles.valueContainer}>
        <Text style={{fontWeight: Fonts.type.bold}}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10,
    marginVertical: 5
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    paddingRight: 5
  }
})

export default NFSmallCard