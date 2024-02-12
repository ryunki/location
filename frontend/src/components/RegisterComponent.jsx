import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const RegisterComponent = ({title}) => {
  return (
      <View style={styles.registerWrapper}>
        <Text style={styles.textBlue}>
          {title}
        </Text>
      </View>
  )
}

export default RegisterComponent

const styles = StyleSheet.create({
  registerWrapper:{
    // backgroundColor:'red'
  },
  textBlue:{
    color:COLOR.blue100,
  },
})