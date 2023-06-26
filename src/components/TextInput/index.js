import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputExample = ({ nome, cpf }) => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="CPF"
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
