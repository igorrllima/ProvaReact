import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProdutoCard({ descricao, value }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.value}>R${value}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 7,
    margin: 10,
  },
  descricao: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 21,
    color: '#12A454',
    marginBottom: 2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#FFAC2E',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 8,
  },
});

