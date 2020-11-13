import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PlatformCheck = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        {Platform.OS === 'ios' ? <Text style={styles.text}>Hey, you're using iOS!</Text> : <Text style={styles.text}>Hey, you're using Android!</Text>}

        <Text style={styles.text1}>Color changed by Platform</Text>
        <Text style={styles.text2}>Font Size changed by Platform</Text>
        <Text style={styles.text3}>Line Height & Font Size changed by Platform</Text>

        <Text style={{ color: '#fff' }}>No dynamic styling T___T</Text>
      </View>

      <Image style={styles.image} source={require('../assets/friends.png')} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          {
            Platform.OS === 'ios' ? props.navigation.navigate('IosComponent') : props.navigation.navigate('AndroidComponent')
          }
        }}>
        <Text style={styles.btnText}>Secret Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          props.navigation.navigate('ListContainer')
        }}>
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PlatformCheck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283618',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#6aa40f',
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
  image: {
    width: Platform.OS === 'ios' ? 200 : 200,
    height: Platform.OS === 'ios' ? 200 : 200,
    margin: 20,
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  text1: {
    fontSize: 24,
    color: Platform.OS === 'ios' ? 'red' : '#fff',
  },
  text2: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 36 : 18,
  },
  text3: {
    color: '#fff',
    fontSize: 24,
    fontSize: Platform.OS === 'ios' ? 18 : 24,
    lineHeight: Platform.OS === 'ios' ? 80 : 70,
  },
})
