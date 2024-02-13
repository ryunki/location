import React from 'react'
import { ScrollView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

const ScrollViewComponent = ({data, pending, onOffState}) => {
  return (
    <ScrollView >
      {Object.keys(data).map((friend,idx)=>(
        <View key={idx} style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" key={idx}style={[styles.textContent, onOffState == 'Offline' && styles.offline]}>{friend}</Text>
          {pending && 
            <Text style={styles.textContent}> pending</Text>
          }
        </View>
        ))}
    </ScrollView>
  )
}

export default ScrollViewComponent

const styles = StyleSheet.create({
  textContent:{
    // justifyContent:'center',
    // alignItems:'center',
    textAlign:'center',
    color:COLOR.white300,
    backgroundColor:'lightgreen',
    borderRadius:BORDER_RADIUS.radius_4,
    // width:'80%',
    maxWidth:140,
    paddingVertical:SPACING.space_2,
    paddingHorizontal:SPACING.space_6,
    margin:SPACING.space_4,
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  offline:{
    opacity:0.5,
    backgroundColor:'grey'
  }
})