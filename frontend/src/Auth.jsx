import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../theme/theme'
import InputText from './components/InputText';
import CustomButton from './components/CustomButton';
import RegisterComponent from './components/RegisterComponent';
import { validateLoginForm, validateRegisterForm } from '../utils/authValidator';

const Auth = ({setIsAuth}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [isFormValid, setIsFormValid] = useState({
    isValid:false,
    message:''
  })

  const submitHandler = () => {
    console.log(isFormValid)
    if (isFormValid.message === "press button to register"){
      // call register api
    }
    if (isFormValid.message === "press button to login"){
      // call login api
    }
    // after calling API 
    // setIsAuth(true) to go back 
  }
  // reset form after toggle
  const authToggleHandler = () =>{
    // after calling API
    setIsRegister(!isRegister)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    setIsFormValid({ isValid: true, message:''})
  }

  useEffect(()=>{
    if (!isRegister) {
      setIsFormValid(validateLoginForm({username, password}))
    }else{
      setIsFormValid(validateRegisterForm({username, password, confirmPassword}))
    }
  },[username, password, confirmPassword])

  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <InputText label='Username' onChange={setUsername} value={username} type='text'/>
        <InputText label='Password' onChange={setPassword} value={password} type='password' />
        {isRegister && 
          <InputText label='Confirm password' onChange={setConfirmPassword} value={confirmPassword} type='password'/>
        }
        {!isFormValid.isValid ? <Text style={styles.displayMessage}>{isFormValid.message}</Text>: <Text style={styles.displayMessage}>{isFormValid.message}</Text>}
      </View>
      <CustomButton title={isRegister ? 'Register' : 'Login'} onPressButton={submitHandler} disable={!isFormValid.isValid}/>
      <Pressable onPress={authToggleHandler} >
        <RegisterComponent title={isRegister ? 'back to login ':'register'}/>
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
    // marginVertical:SPACING.space_20,
    // width:'80%',
    // borderRadius: BORDER_RADIUS.radius_25,
    backgroundColor: COLOR.white300,
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
  displayMessage: {
    // backgroundColor:'red',
    color: COLOR.white300,
    textAlign:'center',
    fontWeight:'200'
  }
})