import React from 'react'
import { ScrollView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

import FriendsListComponent from '../components/FriendsListComponent';
import ScrollViewComponent from '../components/ScrollViewComponent';

import { friends } from '../../data'

const Friends = () => {

  return (
    <View style={styles.friendsContainer}>
      <View style={styles.friendsDisplayContainer}>
        <FriendsListComponent title='Online'/>
        <FriendsListComponent title='Offline'/>
      </View>
      <View style={styles.friendsInvitationContainer}>
        <Text style={styles.title}>Invitation</Text>
        <View style={styles.friendsInvitationWrapper}>
          <ScrollViewComponent data={friends} pending='pending'/>
        </View>
      </View>
    </View>
  )
}

export default Friends

const styles = StyleSheet.create({
  friendsContainer: {
    flex:1,
    alignItems:'center',
    backgroundColor:COLOR.blue100,
  },
  friendsDisplayContainer:{
    flex:2,
    flexDirection:'row',
    marginVertical:SPACING.space_10,
    // justifyContent:'space-around',
    backgroundColor:COLOR.blue300,
    width:'80%',
    borderRadius:BORDER_RADIUS.radius_15,
    justifyContent:'space-evenly',
    padding:SPACING.space_10,
  },
  friendsInvitationContainer:{
    flex:1,
    marginVertical:SPACING.space_10,
    borderRadius:BORDER_RADIUS.radius_15,
    width:'80%',
    alignItems:'center',
    backgroundColor:COLOR.blue300,
    padding:SPACING.space_10,
  },
  friendsInvitationWrapper:{
    flex:1,
    // backgroundColor:'grey',
    margin:SPACING.space_10,
    padding:SPACING.space_10,
    borderRadius:BORDER_RADIUS.radius_15,
    width:'90%'
  },
  title:{
    fontSize:FONT_SIZE.fontSize_20,
    color:COLOR.white300,
  }
})