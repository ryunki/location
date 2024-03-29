import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { COLOR, FONT_SIZE, SPACING } from '../../theme/theme';

const CustomModal = ({buttonVisible,buttonText, modalVisible, setModalVisible, modalMessage, modalTitle, modalInterval}) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        onShow={modalInterval}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            {buttonVisible && 
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>{buttonText}</Text>
              </Pressable>
            }
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLOR.white300,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLOR.blue200,
    borderRadius: 20,
    padding: SPACING.space_20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop:SPACING.space_18,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLOR.red100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    color:COLOR.white300,
    fontSize:FONT_SIZE.fontSize_18
  },
  modalMessage: {
    textAlign: 'center',
    color:COLOR.white300,
    fontSize:FONT_SIZE.fontSize_26
  },
});

export default CustomModal