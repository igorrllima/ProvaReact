import React from 'react';
import { View, Text, StyleSheet, customStyle } from 'react-native';

export default function Header({title, customStyle}) {
  return (
    <View style={[styles.headerContainer, customStyle]}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFAD31',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight:'fine',
    color: '#FFFFFF',
  },
});

