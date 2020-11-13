import React from 'react'
import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './views/LoginScreen'
import LoggedIn from './views/LoggedIn'

const Stack = createStackNavigator()
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {
  StatusBar.setBarStyle('dark-content', true)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name='Login'>{(props) => <LoginScreen {...props} />}</Stack.Screen>

        <Stack.Screen name='LoggedIn'>{(props) => <LoggedIn {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
