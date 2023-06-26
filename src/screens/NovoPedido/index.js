import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProdutoCard from "../../components/ProdutoCard";

const NovoPedido = ({ navigation }) => {
  return (
    <View>
      <Header customStyle={styles.customHeaderStyle} title="Fazer Pedido" />
      <Text style={styles.cardapio}>Cardápio</Text>
      <ProdutoCard descricao="X-Tudo" value="12,00" />
      <ProdutoCard descricao="X-Tudo" value="12,00" />
      <ProdutoCard descricao="X-Tudo" value="12,00" />
      <Button
        customStyle={styles.customButtonStyle}
        title="Finalizar Pedido"
        onPress={() => navigation.navigate("Inicio")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customHeaderStyle: {
    marginBottom: 12
  },
  customButtonStyle: {
    paddingBottom: 80
  },
  cardapio: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 13,
    color: "#3D3D3D"
  }
});

export default NovoPedido;
