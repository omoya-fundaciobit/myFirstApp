import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const DetailScreen = ({ route, navigation }) => {
  const { id, name, surname, email, avatar } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.contactInfo}>
        <Image source={{ uri: avatar }} style={styles.imagen} />
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Surname: {surname}</Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListScreen')
        }}
        style={styles.backButton}
      >
        <Text style={styles.text}>Atrás</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283618',
  },
  contactInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backButton: {
    width: 140,
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#6a040f',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 60,
  },
  imagen: {
    width: 300,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
})
