import React from 'react'
import { 
  StyleSheet, 
  Dimensions 
} from 'react-native'
import colors from './Colors'
const { width } = Dimensions.get('window')

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
    justifyContent: 'center',
    marginTop: 5
  },
  textInput: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 350
  },
  label: {
    fontWeight: 'bold'
  },
  form: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 10
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  avatarSmall: {
    borderRadius: 12, 
    width: 25, 
    height: 25, 
    marginHorizontal: 2
  },
  cardTitle: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16
  },
  errorContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30
  },
  textCentered: {
    textAlign: 'center'
  }
})

export default baseStyles