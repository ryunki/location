import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const Account = () => {

  const onPressDelete = () => {
    console.log('delete user account')
  }
  const onPressEdit = () => {
    console.log('edit user account')
  }

  return (
    <View style={styles.accountContainer}>
      <View>
        <Text style={styles.title}>User name</Text>
        <Text style={styles.textContent}>user 1</Text>
      </View>
      <Pressable onPress={onPressEdit}>
        <Text style={styles.textContent}>edit account</Text>
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <Text style={[styles.textContent, styles.delete]}>delete account</Text>
      </Pressable>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  accountContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor:COLOR.blue100,
  },
  textContent:{
    // justifyContent:'center',
    // alignItems:'center',
    textAlign:'center',
    color:COLOR.white300,
    backgroundColor:'lightgreen',
    borderRadius:BORDER_RADIUS.radius_4,
    // width:'80%',
    maxWidth:150,
    paddingVertical:SPACING.space_2,
    paddingHorizontal:SPACING.space_6,
    margin:SPACING.space_4,
  },
  delete:{
    backgroundColor:'red',
  },
  title:{
    fontSize:FONT_SIZE.fontSize_18,
    color:COLOR.white300
  }
})