import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import PedidosCard from "../../components/PedidosCard";

const Pedidos = ({ navigation }) => {
  return (
    <View>
      <Header customStyle={styles.customHeaderStyle} title="Pedidos" />
      <PedidosCard
        cliente="Nome do Cliente"
        produtos={[
          { quantidade: 2, descricao: "X-tudo" },
          { quantidade: 3, descricao: "X Salada" }
          // Adicione mais objetos de produto aqui
        ]}
        total={100.0}
        onFinalizar={() => {
          // Lógica para finalizar
        }}
        onCancelar={() => {
          // Lógica para cancelar
        }}
      />
      <Button title="Voltar" onPress={() => navigation.navigate("Inicio")} />
    </View>
  );
};

const styles = StyleSheet.create({
  customHeaderStyle: {
    marginBottom: 10
  }
});

export default Pedidos;
