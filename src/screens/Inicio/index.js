import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Navigation from "../../stacks/MainStack";

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigation.navigate("novoPedido")}
      >
        <Text style={styles.buttonText}>NOVO PEDIDO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigation.navigate("Pedidos")}
      >
        <Text style={styles.buttonText}>VER PEDIDOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigation.navigate("CadastroItem")}
      >
        <Text style={styles.buttonText}>CADASTRAR ITEM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFAD31",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 60,
    paddingVertical: "70%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16
  },
  button: {
    backgroundColor: "#F97700",
    borderRadius: 55,
    paddingVertical: 12,
    paddingHorizontal: 35,
    marginBottom: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "fine",
    color: "white"
  }
});

export default Inicio;
