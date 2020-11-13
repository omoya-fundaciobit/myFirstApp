import React, { useState } from "react";
import { View, Text, Alert, Modal, StyleSheet, TouchableOpacity } from "react-native";

const ModalDemo = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Ha cerrado el Modal.");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Este es el Modal</Text>

            <TouchableOpacity
              style={styles.cerrarBtn}
              onPress={() => {
                console.log("cerrar modal");
                setShowModal(!showModal);
              }}>
              <Text style={styles.cerrarBtnText}>Cerrar Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.modalBtn}
        onPress={() => {
          setShowModal(true);
        }}>
        <Text>Abre Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.modalBtn, { marginTop: 20 }]}
        onPress={() => {
          props.navigation.navigate("ListContainer");
        }}>
        <Text>Átras</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  modalBtn: {
    width: 140,
    height: 60,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  cerrarBtn: {
    backgroundColor: "dodgerblue",
    padding: 10,
  },
  cerrarBtnText: {
    color: "#fff",
    fontSize: 18,
  },
});
