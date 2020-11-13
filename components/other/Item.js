import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'

const Item = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={styles.itemFlex}>
        <Image source={{ uri: item.avatar }} style={styles.imagen} />
        <Text style={styles.name}>{item.first_name}</Text>
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
