import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputExample = ({descricao, preco}) => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Descrição"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Preço: R$ 0,01"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default TextInputExample;