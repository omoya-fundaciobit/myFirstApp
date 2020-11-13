import React, { useState } from 'react'
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'

import ListScreen from '../ListScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'

// import Constants from 'expo-constants'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const AndroidRefresh = (props) => {
  const [refreshing, setRefreshing] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => {
      setRefreshing(false)
      setShowSecret(true)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.width}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            title="How refreshing!"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text style={styles.text}>
          Pull down to see RefreshControl indicator
        </Text>

        {/* {showSecret ? (
          <TouchableOpacity
            style={styles.secret}
            onPress={() => {
              setShowSecret(false)
              props.navigation.navigate('Android Welcome')
            }}>
            <Text style={styles.btnText}>A Refreshing Secret!</Text>
          </TouchableOpacity>
        ) : null} */}

        {showSecret ? <ListScreen /> : null}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secret: {
    width: 160,
    height: 80,
    marginTop: 20,
    backgroundColor: '#a4c639',
    borderRadius: 5,
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
  width: {
    width: '100%',
  },
})

export default AndroidRefresh
