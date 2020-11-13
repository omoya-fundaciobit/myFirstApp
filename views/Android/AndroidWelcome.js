import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AndroidComponent = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.title}>Bienvenido al componente secreto de Android!</Text>
  
        <Text style={styles.subtitle}>Abre el drawer navigator para más secretos!</Text>
  
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            props.navigation.navigate('PlatformCheck')
          }}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AndroidComponent

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
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  welcome: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
