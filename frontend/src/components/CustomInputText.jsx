import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const CustomInputText = ({label, onChange, value, type, styleTitle, styleTextInput}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.textTitle, styleTitle]}>{label}</Text>
      <TextInput style={[styles.textInput, styleTextInput]} onChangeText={onChange} value={value} secureTextEntry={type === 'password'}/>
    </View>
  )
}

export default CustomInputText

const styles = StyleSheet.create({
  inputWrapper: {
    margin: SPACING.space_10
  },
  textInput:{
    backgroundColor:COLOR.white300,
    borderRadius: BORDER_RADIUS.radius_4,
  },
  textTitle:{
    color:COLOR.white300,
    paddingBottom: SPACING.space_8
  },
})