import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const CadastroCliente = ({ navigation }) => {
  return (
    <View>
      <Header customStyle={styles.customHeaderStyle} title="Cadastro Cliente" />
      <TextInput />
      <Button
        title="Proximo"
        onPress={() => navigation.navigate("novoPedido")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customHeaderStyle: {
    marginBottom: 170
  }
});

export default CadastroCliente;
