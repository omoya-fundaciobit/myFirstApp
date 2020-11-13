import React, { useState } from "react";
import { Pressable, Text, View, Alert, Modal, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PressableDemo = (props) => {
  const [contador, setContador] = useState(0);
  const [message, setMessage] = useState(false);

  let textlog = "";
  if (contador > 1) {
    textlog = contador + "x onPress";
  } else if (contador > 0) {
    textlog = "onPress";
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setContador((current) => current + 1);
        }}
        onLongPress={() => {
          setMessage(true);
        }}
        style={({ pressed }) => [{ backgroundColor: pressed ? "gray" : "white" }, styles.wrapper]}>
        {({ pressed }) => (pressed ? <Text>Pulsado!</Text> : <Text>Pulsa aquí</Text>)}
      </Pressable>

      <Text style={{ marginTop: 20 }}>{textlog}</Text>

      {message ? <Text style={{ marginTop: 20 }}>This is the message!</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  wrapper: {
    width: "60%",
    padding: 5,
  },
});

export default PressableDemo;
