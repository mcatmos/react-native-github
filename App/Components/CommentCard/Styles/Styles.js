import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'


const NFCommentCard = StyleSheet.create({
  container: {
    padding: 14,
    borderColor: Colors.snow,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.white,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatar: {
    width: 50, 
    height: 50, 
    borderRadius:25,
    marginRight: 10
  },
  rightContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
})

export default NFCommentCard