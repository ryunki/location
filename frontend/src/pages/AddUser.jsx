import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'
import InputText from '../components/InputText';

const AddUser = ({visible, closeModal}) => {
  const [username, setUsername] = useState('')

  const onPressAddUser = () => {
    console.log('add user', username)
  }

  return (

    <View style={styles.centeredView}>
      <InputText label='User name' onChange={setUsername} value={username}/>
      <Pressable onPress={onPressAddUser}>
        <Text style={styles.text}>Add user</Text>
      </Pressable>
    </View>
  )
}

export default AddUser

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLOR.blue100,
  },
  text:{
    color:COLOR.white300,
  }
})