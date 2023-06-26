import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, map } from "react-native";

const PedidoFeito = ({ cliente, produtos, total, onFinalizar, onCancelar }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: "#FFA95A" }]}>
        <Text style={styles.clienteText}>{cliente}</Text>
      </View>
      <View style={styles.produtosContainer}>
        {produtos.map((produto, index) => (
          <View key={index} style={styles.produtoContainer}>
            <Text style={styles.quantidadeText}>{produto.quantidade}</Text>
            <Text style={styles.descricaoText}>{produto.descricao}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {total}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#12A454" }]}
          onPress={onFinalizar}
        >
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E83F5B" }]}
          onPress={onCancelar}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  },
  header: {
    backgroundColor: "#FFA95A",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 4
  },
  clienteText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  produtosContainer: {
    marginBottom: 16
  },
  produtoContainer: {
    flexDirection: "row",
    marginBottom: 8
  },
  quantidadeText: {
    fontSize: 16,
    marginRight: 12,
    marginLeft: 10
  },
  descricaoText: {
    fontSize: 17
  },
  totalContainer: {
    marginBottom: 16
  },
  totalText: {
    fontSize: 19,
    fontWeight: "bold"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    borderRadius: 4,
    padding: 12,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

export default PedidoFeito;
