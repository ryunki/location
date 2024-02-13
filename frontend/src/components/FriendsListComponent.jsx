import React from 'react'
import { ScrollView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

import ScrollViewComponent from './ScrollViewComponent';

import { friends } from '../../data';

const FriendsListComponent = ({title}) => {
  return (
    <View style={styles.friendsListContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.friendsListWrapper}>
        <ScrollViewComponent data={friends} onOffState={title}/>
      </View>
    </View>
  )
}

export default FriendsListComponent

const styles = StyleSheet.create({
  friendsListContainer:{
    // backgroundColor:'violet',
    alignItems:'center',
    flex:1,
  },
  friendsListWrapper:{
    margin:SPACING.space_10,
    // backgroundColor:COLOR.lightBlue100,
    borderRadius:BORDER_RADIUS.radius_10,
    padding:SPACING.space_10,
    flex:1,
    
    // overflow:'hidden',
  },
  title:{
    fontSize:FONT_SIZE.fontSize_20,
    color:COLOR.white300,
    // backgroundColor:'red'
  }
})