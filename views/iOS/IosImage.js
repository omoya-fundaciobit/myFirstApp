import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IosImage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Un imagen secreto!</Text>

      <Image style={styles.image} source={require('../../assets/ios14.png')} />

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          props.navigation.navigate('iOS Welcome')
        }}>
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default IosImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
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
  btnText: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
})
