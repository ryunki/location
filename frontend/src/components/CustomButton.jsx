import React from 'react'
import { StyleSheet, Text, TextInput, View, Pressable, Button } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const CustomButton = ({title, onPressButton}) => {
  return (
    <Pressable onPress={onPressButton}>
      <View style={styles.button}>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default CustomButton


const styles = StyleSheet.create({

  button:{
    backgroundColor:COLOR.blue100,
    padding:SPACING.space_14,
    borderRadius: BORDER_RADIUS.radius_10,
    marginVertical:SPACING.space_20,
  },

  textWhite:{
    color:COLOR.white300,
  },
})