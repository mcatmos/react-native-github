import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import { Colors, BaseStyles } from '../../Themes/'
import NFCardHeader from '../CardHeader/NFCardHeader'
import NFPullRequesCardtyles from './Styles/Styles'


const renderBranch = (defaultBranch) => {
  return (
    <View style={NFPullRequesCardtyles.row}>
      <Icon name={'git-branch'}/>
      <Text style={NFPullRequesCardtyles.description}>
        {defaultBranch}
      </Text>
    </View>
  )
}

const renderReviewers = (requested_reviewers) => {
  if (requested_reviewers.length > 0) {
    return ( 
      <View style={{flex: 3}}>
        <NFCardHeader label={'Reviewers'} />
        <View style={NFPullRequesCardtyles.rowSmallContainer}>
          {
            requested_reviewers.map((reviewer, index) => {
              return (
                <Image 
                  key={index}
                  source={{uri: reviewer.avatar_url}} 
                  resizeMode={'cover'} 
                  style={BaseStyles.avatarSmall}
                />
              )
            })
          }
        </View>
      </View>
    )
  }
}

const renderAssignee = (assignee) => {
  if (assignee) {
    return (
      <View style={{alignItems: 'flex-end', flex: 1}}>
        <NFCardHeader label={'Assignee'} />
        <View style={NFPullRequesCardtyles.rowSmallContainer}>
          <Image 
            source={{uri: assignee.avatar_url}} 
            resizeMode={'cover'} 
            style={BaseStyles.avatarSmall}
          />
        </View>
      </View>
    )
  }
}

const renderBottom = (requested_reviewers, assignee) => {
  return (
    <View style={NFPullRequesCardtyles.rowContainer}>
      {renderReviewers(requested_reviewers)}
      {renderAssignee(assignee)}
    </View>
  )
}

const renderRightContainer = (
  title,
  body
) => {
  return (
    <View style={NFPullRequesCardtyles.rightContainer}>
      <Text style={BaseStyles.cardTitle}>
        {title}
      </Text>
      <Text 
        numberOfLines={2} 
        style={NFPullRequesCardtyles.description}>
          {body}
      </Text>
    </View>
  )
}

const renderMilestone = (milestone) => {
  if (milestone) {
    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <NFCardHeader label={'Assignee'} />
        <View style={NFPullRequesCardtyles.rowSmallContainer}>
          <Icon name={'milestone'} />
          <Text>{milestone.title}</Text>
        </View>
      </View>
    )
  }
}

const renderLeftContainer = (state) => {
  return (
    <View style={NFPullRequesCardtyles.leftContainer}>
      <Text style={NFPullRequesCardtyles.language}>{state}</Text>
    </View>
  )
}

const NFPullRequestCard = ({
  id,
  milestone,
  body,
  title,
  state,
  name,
  open_issues,
  requested_reviewers,
  assignee,
  requestRepo
}) => {
  return (
    <TouchableOpacity 
      onPress={requestRepo}
      style={NFPullRequesCardtyles.container}>
      <View style={NFPullRequesCardtyles.topContainer}>
        {renderRightContainer(title, body, open_issues)}
        {renderLeftContainer(state)}
      </View>
      {renderBottom(requested_reviewers, assignee)}
      {renderMilestone(milestone)}
    </TouchableOpacity>
  )
}

export default NFPullRequestCard