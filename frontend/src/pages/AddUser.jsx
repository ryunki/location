import React, {useState, useEffect} from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'
import InputText from '../components/InputText';
import CustomButton from '../components/CustomButton';
import CustomModal from '../components/CustomModal';

const AddUser = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [modalMessage, setModalMessage] = useState('')

  const onPressAddUser = () => {
    console.log('add user', username, modalVisible)
    setMessage(username)
    // API to send username for invitation
    // clear input
    setUsername('')
    setModalVisible(true)
    
    setTimeout(()=>{
      navigation.navigate('Friends')
    },1000)
  }

  if(modalVisible){
    return <CustomModal modalTitle='Sent invitation to' modalMessage={message} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
  }
  return (
    <View style={styles.centeredView}>
      <View style={styles.addUserContainer}>
        <InputText label='User name' onChange={setUsername} value={username} styleTitle={styles.styleTitle} styleTextInput={styles.styleTextInput}/>
        <CustomButton title='Add User' onPressButton={onPressAddUser} disable={username ? false: true}/>
      </View>
    </View>
  )
}

export default AddUser

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLOR.white300,
    // backgroundColor:'red',
  },
  addUserContainer:{
    padding:SPACING.space_20,
    backgroundColor:COLOR.blue300,
    borderRadius: BORDER_RADIUS.radius_15,
    // borderRadius:
    flex:1,
    marginHorizontal:SPACING.space_20,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:SPACING.space_20,
  },
  styleTitle:{
    fontSize:FONT_SIZE.fontSize_26,
  },
  styleTextInput:{
    width:200,
    height:50,
    fontSize:FONT_SIZE.fontSize_26
  }
})