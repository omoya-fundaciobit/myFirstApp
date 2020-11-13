import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Item from '../components/other/Item'

// import { CONTACTS } from '../mocks/data/contacts.mock'
import axios from 'axios'
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
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((result) => setContacts(result.data.data))
      .catch((error) => console.log(error))
  }, [])

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
          props.navigation.navigate('DetailScreen', {
            id: item.id,
            name: item.first_name,
            surname: item.last_name,
            email: item.email,
            avatar: item.avatar,
          })
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
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          numColumns={1}
          getItemLayout={(data, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
          initialScrollIndex={0}
          refreshControl={
            <RefreshControl
              title="How refreshing!"
              titleColor="#fff"
              tintColor="#fff"
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>

      <View style={styles.containerBottom}>
        {selectedId ? (
          <Text style={[styles.text]}>
            {contacts
              .filter((contact) => contact.id === selectedId)
              .map((contact) => contact.name)}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            props.navigation.navigate('ListContainer')
          }}
        >
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
    paddingTop: 20,
    height: height - 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
  },
  backBtn: {
    width: 140,
    height: 30,
    marginTop: 10,
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
    marginTop: 20,
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
    height: 50,
  },
})
