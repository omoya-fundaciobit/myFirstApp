import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const ListContainer = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Welcome to the App!</Text>

        <Text style={styles.subtitle}>
          Click the first button to see the contacts list or the second to
          return to the login page
        </Text>

        <Text style={styles.text}>
          There's also a drawer with navigation links if you swipe from left to
          right
        </Text>
      </View>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          props.navigation.navigate('ListScreen')
        }}
      >
        <Text style={styles.btnText}>Contacts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkBtn}
        onPress={() => {
          props.navigation.navigate('PlatformCheck')
        }}
      >
        <Text style={styles.btnText}>Check OS</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.pressableBtn}
        onPress={() => {
          props.navigation.navigate('PressableDemo')
        }}
      >
        <Text style={styles.btnText}>Pressable</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={styles.modalBtn}
        onPress={() => {
          props.navigation.navigate('ModalDemo')
        }}
      >
        <Text style={styles.btnText}>Modal</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={styles.refreshBtn}
        onPress={() => {
          props.navigation.navigate('RefreshDemo')
        }}
      >
        <Text style={styles.btnText}>Refresh</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          props.navigation.goBack()
        }}
      >
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ListContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
  },

  body: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#028090',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#a28010',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
  pressableBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#7a145f',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#2a290f',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#4a740f',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginTop: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
})
