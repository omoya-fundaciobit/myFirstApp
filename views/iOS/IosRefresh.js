import React, { useState } from 'react'
import { ScrollView, RefreshControl, StyleSheet, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// import Constants from 'expo-constants'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const IosRefresh = (props) => {
  const [refreshing, setRefreshing] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => {
      setRefreshing(false)
      setShowSecret(true)
      setTimeout(() => {
        props.navigation.navigate('iOS Welcome')
      }, 5000)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollWidth} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl title='How refreshing!' titleColor='#fff' tintColor='#fff' refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text style={styles.text}>Pull down to see the "refreshControl" indicator</Text>

        {showSecret ? (
          <TouchableOpacity
            style={styles.secret}
            onPress={() => {
              setShowSecret(false)
              props.navigation.navigate('iOS Welcome')
            }}>
            <Text style={styles.btnText}>A Refreshing Secret!</Text>
          </TouchableOpacity>
        ) : null}
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
    backgroundColor: '#5856d6',
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
  scrollWidth: {
    width: '100%',
  },
})

export default IosRefresh
