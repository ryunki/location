import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../theme/theme'
import InputText from './components/InputText';
import CustomButton from './components/CustomButton';
import RegisterComponent from './components/RegisterComponent';
const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const loginSubmitHandler = () => {
    console.log(username, password,confirmPassword)
  }

  const registerHandler = () =>{
    console.log('register')
    setIsRegister(!isRegister)
  }

  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <InputText label='username' onChange={setUsername} value={username}/>
        <InputText label='password' onChange={setPassword} value={password}/>
        {isRegister && 
          <InputText label='confirm password' onChange={setConfirmPassword} value={confirmPassword}/>
        }
      </View>
      <CustomButton title={isRegister ? 'Submit' : 'Login'} onPressButton={loginSubmitHandler}/>
      
      <Pressable onPress={registerHandler} >
        <RegisterComponent onPress={registerHandler} title={isRegister ? 'back to login ':'register'}/>
      </Pressable>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  loginContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:SPACING.space_20,
    width:'80%',
    borderRadius: BORDER_RADIUS.radius_25,
    backgroundColor: COLOR.white100,
  },
  inputContainer:{
    padding:SPACING.space_20,
    backgroundColor:COLOR.blue100,
    borderRadius: BORDER_RADIUS.radius_15,
    // borderRadius:
    width:'80%',
    // height:'0%',
    // justifyContent:''
  },
  loginButton:{
    backgroundColor:COLOR.blue100,
    padding:SPACING.space_14,
    borderRadius: BORDER_RADIUS.radius_10,
    marginVertical:SPACING.space_20,
  },
})