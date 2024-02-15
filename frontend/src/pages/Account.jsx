import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback} from 'react-native'
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'
import CustomInputText from '../components/CustomInputText'
import CustomModal from '../components/CustomModal'
import { validateUsername } from '../../utils/authValidator'

const Account = () => {
  const [toggleEdit, setToggleEdit] = useState(false)
  const [username, setUsername] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [editShowMessage, setEditShowMessage] = useState({isValid:false, message:''})

  const onPressDelete = () => {
    console.log('delete user account')
    setModalVisible(true)
  }
  const onPressEdit = () => {
    console.log('edit user account1')
    setToggleEdit(!toggleEdit)
    setEditShowMessage({isValid:false, message:''})
  }
  const onPressConfirm = () => {
    console.log('confirm username')
    const {isValid, message} = validateUsername(username)
    setUsername('')
    setToggleEdit(!toggleEdit)
  }

  if (modalVisible) {
    return (
      <CustomModal modalMessage='Are you sure?' modalTitle='Delete'  buttonVisible={true}  buttonText='delete'
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    )
  }

  console.log(editShowMessage)
  return (
    <>
      <TouchableWithoutFeedback
        // close input for editing username when touched anywhere on screen
        onPress={() => {
          setToggleEdit(false)
        }}>
        <View style={styles.backgroundContainer}>
          <View style={styles.accountContainer}>
            {/* {!editShowMessage.isValid && 
              <Text style={styles.message}>{editShowMessage.message}</Text>
            } */}
            {toggleEdit ? (
              <>
                <CustomInputText label='New Username' onChange={setUsername}  value={username}  type='text'/>
                <Pressable disabled={username.length > 0} onPress={onPressConfirm}> 
                  <Text style={styles.textContent}>confirm</Text>
                </Pressable>
              </>
            ) : (
              <>
                <Text style={styles.textContent}>user 1</Text>
                <Pressable onPress={onPressEdit}>
                  <Text style={styles.textContent}>edit account</Text>
                </Pressable>
              </>
            )}
            <Pressable onPress={onPressDelete}>
              <Text style={[styles.textContent, styles.delete]}>
                delete account
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default Account

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: COLOR.white300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  accountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.blue300,
    marginVertical: SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_15,
    padding: SPACING.space_20,
    maxWidth: 250,
    // flexDirection:'row',
  },
  textContent: {
    // justifyContent:'center',
    // alignItems:'center',
    textAlign: 'center',
    color: COLOR.white300,
    backgroundColor: 'lightgreen',
    borderRadius: BORDER_RADIUS.radius_4,
    // width:'80%',
    maxWidth: 150,
    paddingVertical: SPACING.space_2,
    paddingHorizontal: SPACING.space_6,
    margin: SPACING.space_10,
  },
  delete: {
    backgroundColor: COLOR.red100,
  },
  title: {
    fontSize: FONT_SIZE.fontSize_18,
    color: COLOR.white300,
  },
  message:{
    color:COLOR.white300
  }
})
