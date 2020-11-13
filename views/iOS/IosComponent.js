import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

import IosWelcome from './IosWelcome'
import IosImage from './IosImage'
import IosRefresh from './IosRefresh'

const IosComponent = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName='IosWelcome'
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='Back' onPress={() => props.navigation.navigate('PlatformCheck')} />
          </DrawerContentScrollView>
        )
      }}>
      <Drawer.Screen name='iOS Welcome'>{(props) => <IosWelcome {...props} />}</Drawer.Screen>

      <Drawer.Screen name='iOS Image'>{(props) => <IosImage {...props} />}</Drawer.Screen>

      <Drawer.Screen name='iOS Refresh'>{(props) => <IosRefresh {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
  )
}
export default IosComponent
