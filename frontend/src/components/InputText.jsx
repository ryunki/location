import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const InputText = ({label, onChange, value, type }) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.textWhite,styles.textSpacing]}>{label}</Text>
      <TextInput style={styles.textInput} onChangeText={onChange} value={value} secureTextEntry={type === 'password'}/>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  inputWrapper: {
    margin: SPACING.space_10
  },
  textInput:{
    backgroundColor:COLOR.white300,
    borderRadius: BORDER_RADIUS.radius_4,
  },
  textWhite:{
    color:COLOR.white300,
  },
  textSpacing:{
    paddingBottom: SPACING.space_8
  }
})