import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function OrangeButton({ title , customStyle }) {
  return (
    <View style={[styles.container, customStyle]}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 315,
  },
  buttonContainer: {
    backgroundColor: "#FFAC2E",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 16,
    width: "93%"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "fine"
  }
});
