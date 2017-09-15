import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import NFCardHeader from '../CardHeader/NFCardHeader'
import NFReposCardStyles from './Styles/Styles'
import { BaseStyles } from '../../Themes/'


const renderBranch = (defaultBranch) => {
  return (
    <View style={{paddingTop: 5}}>
      <NFCardHeader label={'Default Branch'} />
      <View style={NFReposCardStyles.row}>
        <Icon name={'git-branch'}/>
        <Text style={NFReposCardStyles.description}>{defaultBranch}</Text>
      </View>
    </View>
  )
}

const renderIssues = (openIssues) => {
  return (
    <View style={{paddingTop: 5}}>
      <NFCardHeader label={'Open Issues'} />
      <View style={NFReposCardStyles.row}>
        <Icon name={'issue-opened'} style={{paddingBottom: 1}}/>
        <Text style={NFReposCardStyles.description}>{openIssues}</Text>
      </View>
    </View>
  )
}

const renderRightContainer = (
  fullName,
  description
) => {
  return (
    <View style={NFReposCardStyles.rightContainer}>
      <Text style={BaseStyles.cardTitle}>{fullName}</Text>
      {
        description && 
          <Text 
            numberOfLines={2} 
            style={NFReposCardStyles.description}>
              {description}
          </Text>
      }
    </View>
  )
}

const renderLeftContainer = (language) => {
  return (
    <View style={NFReposCardStyles.leftContainer}>
      <Text style={NFReposCardStyles.language}>{language}</Text>
    </View>
  )
}

const NFReposCard = ({
  id,
  default_branch,
  description,
  full_name,
  language,
  name,
  open_issues,
  avatar_url,
  requestRepo
}) => {
  return (
    <TouchableOpacity 
      onPress={requestRepo}
      style={NFReposCardStyles.container}>
      <View style={NFReposCardStyles.rowContainer}>
        {renderRightContainer(full_name, description)}
        {renderLeftContainer(language)}
      </View>
      {default_branch && renderBranch(default_branch) }
      {renderIssues(open_issues)}
    </TouchableOpacity>
  )
}

export default NFReposCard