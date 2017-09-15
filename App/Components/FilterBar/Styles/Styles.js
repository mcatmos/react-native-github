import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes/'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.snow,
    borderBottomWidth: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.white
  },
  textInput: {
    flex: 1,
    padding: 5
  }
})

export default styles