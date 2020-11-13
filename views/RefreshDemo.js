import React, { useState } from "react";
import { ScrollView, RefreshControl, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const RefreshDemo = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      console.log("Refrescado!");
      setShowSecret(true);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollWidth} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text style={styles.text}>Tirar abajo para abrir RefreshControl</Text>

        {showSecret ? (
          <TouchableOpacity
            style={styles.secret}
            onPress={() => {
              setShowSecret(false);
              props.navigation.navigate("ListContainer");
            }}>
            <Text style={styles.btnText}>A Refreshing Secret!</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RefreshDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#283618",
  },
  text: {
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  secret: {
    width: 160,
    height: 80,
    marginTop: 20,
    backgroundColor: "#5856d6",
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
  scrollWidth: {
    width: "100%",
  },
});
