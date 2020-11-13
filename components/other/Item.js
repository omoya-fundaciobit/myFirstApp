import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'

const Item = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={styles.itemFlex}>
        {item.name === 'Martín'
          ? <Image source={{ uri: item.image }} style={styles.imagen} />
          : <Image source={require('./user.png')} style={styles.imagen} />}
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'white',
  },
  imagen: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  itemFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 8,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
})
