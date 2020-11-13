import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
// import { CREDENTIALS_STORAGE_KEY } from '../utils/config/keys/storageKeys'

import Home from './Home'
import SettingsScreen from './SettingsScreen'

const Drawer = createDrawerNavigator()

const LoggedIn = (props) => {
  // useEffect(() => {
  //   const readData = async () => {
  //     try {
  //       const user = await AsyncStorage.getItem(CREDENTIALS_STORAGE_KEY)
  //       console.log(user)
  //     } catch (e) {
  //       alert('Failed to fetch the data from storage')
  //     }
  //   }
  //   readData()
  // }, [])

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='Logout' onPress={() => props.navigation.navigate('Login')} />
          </DrawerContentScrollView>
        )
      }}>
      <Drawer.Screen name='Home'>{(props) => <Home {...props} />}</Drawer.Screen>

      <Drawer.Screen name='Settings'>{(props) => <SettingsScreen {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
  )
}
export default LoggedIn
