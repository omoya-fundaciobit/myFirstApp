import React from 'react'
import { Image } from 'react-native'
import { Icon } from 'react-native-elements'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

import AndroidWelcome from './AndroidWelcome'
// import AndroidImage from './AndroidImage'
import AndroidRefresh from './AndroidRefresh'
import AndroidModal from './AndroidModal'
import AndroidPressable from './AndroidPressable'

const AndroidComponent = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="AndroidWelcome"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Back"
              onPress={() => props.navigation.navigate('PlatformCheck')}
            />
          </DrawerContentScrollView>
        )
      }}
    >
      <Drawer.Screen
        name="Android Welcome"
        options={{
          title: 'Welcome',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../../assets/friends.png')}
              style={[
                // focused ? styles.drawerActive : styles.drawerInActive,
                { height: 40, width: 40 },
              ]}
            />
          ),
        }}
      >
        {(props) => <AndroidWelcome {...props} />}
      </Drawer.Screen>
      {/* 
      <Drawer.Screen name="Android Image">
        {(props) => <AndroidImage {...props} />}
      </Drawer.Screen> */}

      <Drawer.Screen
        name="Android Refresh"
        options={{
          title: 'Welcome',
          drawerIcon: ({ focused, size }) => <Icon name="rowing" />,
        }}
      >
        {(props) => <AndroidRefresh {...props} />}
      </Drawer.Screen>

      <Drawer.Screen name="Android Modal">
        {(props) => <AndroidModal {...props} />}
      </Drawer.Screen>

      <Drawer.Screen name="Android Pressable">
        {(props) => <AndroidPressable {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}
export default AndroidComponent
