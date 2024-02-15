import React,{useEffect} from 'react'
import { StyleSheet, Text, TextInput, View, Pressable, Button } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const CustomButton = ({title, onPressButton, disable}) => {
console.log(disable)
  return (
    <Pressable onPress={onPressButton} disabled={disable} >
      <View style={disable ? styles.disabledButton : styles.button }>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default CustomButton


const styles = StyleSheet.create({

  button:{
    // flex:1,
    backgroundColor:COLOR.blue100,
    padding:SPACING.space_12,
    borderRadius: BORDER_RADIUS.radius_10,
    marginVertical:SPACING.space_20,
  },
  disabledButton:{
    // flex:1,
    backgroundColor:COLOR.grey100,
    padding:SPACING.space_12,
    borderRadius: BORDER_RADIUS.radius_10,
    marginVertical:SPACING.space_20,
  },
  textWhite:{
    color:COLOR.white300,
    // textAlign:'center',
    // backgroundColor:'red',
    flexWrap: 'wrap',
    // flex: 1,
    textAlign: 'center',
  },
})