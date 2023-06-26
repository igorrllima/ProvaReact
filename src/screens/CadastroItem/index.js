import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import TextInput from "../../components/TextInputLogin";
import Button from "../../components/Button";

const CadastroItem = ({ navigation }) => {
  return (
    <View>
      <Header
        customStyle={styles.customButtonStyle}
        title="Cadastrar Item do Cardapio"
      />
      <TextInput />
      <Button title="Confirmar" onPress={() => navigation.navigate("Inicio")} />
    </View>
  );
};

const styles = StyleSheet.create({
  customButtonStyle: {
    marginBottom: 170
  }
});

export default CadastroItem;
