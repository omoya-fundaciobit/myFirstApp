import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View, ActivityIndicator, Keyboard, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { login } from '../utils/services/authService'
import { CREDENTIALS_STORAGE_KEY } from '../utils/config/keys/storageKeys'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginScreen = (props) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  function handleUserInputChange(text) {
    console.log('User: ', text)
    setUser(text)
  }

  function handlePasswordInputChange(text) {
    console.log('password: ', text)
    setPassword(text)
  }

  function handleAPIResponse(response) {
    setLoading(false)
    setMessage('')

    if (response.status === 200) {
      console.log('Login Succesful! Token: ', response.data.token)
      AsyncStorage.setItem(CREDENTIALS_STORAGE_KEY, response.data.token)
      setUser('')
      setPassword('')
      props.navigation.navigate('LoggedIn')
    } else {
      AsyncStorage.setItem(CREDENTIALS_STORAGE_KEY, null)
      setMessage('Error. Invalid User or Password')
    }
  }

  function handleSumbit() {
    Keyboard.dismiss()
    setLoading(true)

    try {
      const body = {
        email: user,
        password: password,
      }

      login(body).then((response) => {
        console.log('response in login function: ', response)
        handleAPIResponse(response)
      })
    } catch (error) {
      setLoading(false)
      setMessage('Error Login')
      console.log(`Error Login ${error}`)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido a Nuestra App</Text>
      </View>

      {/* Email */}
      <View style={styles.input}>
        <TextInput value={user} onChangeText={handleUserInputChange} placeholder='Email' style={styles.inputText} />
      </View>

      <View style={styles.input}>
        <TextInput value={password} onChangeText={handlePasswordInputChange} placeholder='Password' secureTextEntry={true} style={styles.inputText} />
      </View>

      {message ? <Text style={styles.error}>{message}</Text> : null}

      <TouchableOpacity
        style={styles.authBtn}
        onPress={() => {
          handleSumbit()
        }}>
        <Text style={styles.btntext}>Auth Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.noAuthBtn}
        onPress={() => {
          props.navigation.navigate('LoggedIn')
        }}>
        <Text style={styles.btntext}>Access without Auth</Text>
      </TouchableOpacity>

      {isLoading ? <ActivityIndicator style={{ margin: 10 }} color='#097799' size='large' /> : null}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#606c38',
    borderColor: '#bc6c25',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAuthBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    backgroundColor: '#028090',
    borderColor: '#bc6c25',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#fff',
  },
  text: {
    color: '#FFFFFF',
  },
  input: {
    width: '60%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  inputText: {
    height: 36,
    padding: 4,
    fontSize: 18,
    color: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
  },
  title: {
    color: '#000',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  error: {
    fontSize: 20,
    margin: 10,
    color: 'tomato',
  },
})
