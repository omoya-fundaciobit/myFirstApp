import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SettingsScreen = ({ props, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Settings Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListContainer')
        }}
        style={styles.logoutBtn}>
        <Text style={styles.btnText}>Atrás</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
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
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
})
