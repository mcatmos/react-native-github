import React from 'react'
import { 
  StyleSheet, 
  Dimensions 
} from 'react-native'
import colors from './Colors'
import fonts from './Fonts'
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
  avatarBig: {
    borderRadius: 75, 
    width: 150, 
    height: 150, 
    marginHorizontal: 2
  },
  cardTitle: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: fonts.size.large
  },
  errorContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30
  },
  textCentered: {
    textAlign: 'center'
  },
  textDetail: {
    fontSize: fonts.size.small,
    color: colors.grey,
    paddingBottom: 5
  },
  valueContainer: {
    backgroundColor: colors.lightGrey,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
})

export default baseStyles