import React, { useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PressableScreen = (props) => {
  const [timesPressed, setTimesPressed] = useState(0)
  const [showModal, setShowModal] = useState(false)

  let textLog = ''
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress'
  } else if (timesPressed > 0) {
    textLog = 'onPress'
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1)
        }}
        // delayLongPress={1000}
        onLongPress={() => {
          setShowModal(true)
        }}
        style={({ pressed }) => [{ backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' }, styles.wrapperCustom]}>
        {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID='pressable_press_console'>{textLog}</Text>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setShowModal(!showModal)
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          props.navigation.navigate('ListContainer')
        }}>
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  logoutBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#6a040f',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default PressableScreen
