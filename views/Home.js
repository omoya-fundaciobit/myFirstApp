import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import ListContainer from './ListContainer'
import ListScreen from './ListScreen'
import DetailScreen from './DetailScreen'
import PlatformCheck from './PlatformCheck'
import AndroidComponent from './Android/AndroidComponent'
import IosComponent from './iOS/IosComponent'
import PressableScreen from './PressableScreen'
import ModalScreen from './ModalScreen'
import PressableDemo from './PressableDemo'
import ModalDemo from './ModalDemo'
import RefreshDemo from './RefreshDemo'

const Home = (props) => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="ListContainer">
        {(props) => <ListContainer {...props} />}
      </Stack.Screen>

      <Stack.Screen name="ListScreen">
        {(props) => <ListScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name="DetailScreen">
        {(props) => <DetailScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name="PlatformCheck">
        {(props) => <PlatformCheck {...props} />}
      </Stack.Screen>

      <Stack.Screen name="AndroidComponent">
        {(props) => <AndroidComponent {...props} />}
      </Stack.Screen>

      <Stack.Screen name="IosComponent">
        {(props) => <IosComponent {...props} />}
      </Stack.Screen>

      <Stack.Screen name="PressableScreen">
        {(props) => <PressableScreen {...props} />}
      </Stack.Screen>

      {/* <Stack.Screen name="PressableDemo">
        {(props) => <PressableDemo {...props} />}
      </Stack.Screen> */}
      {/* <Stack.Screen name="RefreshDemo">
        {(props) => <RefreshDemo {...props} />}
      </Stack.Screen> */}

      {/* <Stack.Screen name="ModalDemo">
        {(props) => <ModalDemo {...props} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  )
}

export default Home
