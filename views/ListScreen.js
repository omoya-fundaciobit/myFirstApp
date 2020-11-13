import React, { useState, useEffect } from 'react'
import { Dimensions, RefreshControl, SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Item from '../components/other/Item'

import { CONTACTS } from '../mocks/data/contacts.mock'
const height = Dimensions.get('window').height

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const ListScreen = (props, route) => {
  const [selectedId, setSelectedId] = useState(null)
  const [index, setIndex] = useState(0)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => {
      setRefreshing(false)
      setSelectedId(null)
    })
  }, [])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#482211' : '#028090'

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          setIndex(item.index)
          props.navigation.navigate('DetailScreen', { id: item.id, name: item.name, surname: item.surname, email: item.email, phone: item.phone })
        }}
        style={[styles.item, { backgroundColor: backgroundColor }]}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={CONTACTS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          numColumns={1}
          getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
          initialScrollIndex={12}
          refreshControl={<RefreshControl title='How refreshing!' titleColor='#fff' tintColor='#fff' refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </View>

      <View style={styles.containerBottom}>
        {selectedId ? (
          <Text style={[styles.text, { marginTop: 20 }]}>
            Has seleccionado:
            {CONTACTS.filter((contact) => contact.id === selectedId).map((contact) => contact.name)}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            props.navigation.navigate('ListContainer')
          }}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
  },
  backBtn: {
    width: 140,
    height: 50,
    marginTop: 20,
    borderColor: '#bc6c25',
    backgroundColor: '#6a040f',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  flatlist: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#aaa',
    // borderWidth: 1,
    // borderRadius: 10,
  },
  containerTop: {
    width: '100%',
    flex: 3,
  },
  containerBottom: {
    flex: 1,
  },
})
