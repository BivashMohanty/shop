import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

const SummaryScreen = ({ navigation }) => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0).toFixed(2);

  const handleCheckout = () => {
    // Handle checkout process here (e.g., payment processing)
    alert('Checkout process started');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
        <Text style={styles.summaryText}>Total Price: Rs {totalPrice}/-</Text>
      </View>
      <Button title="Proceed to Checkout" onPress={handleCheckout} />
      {/* <Button title="Back to Cart" onPress={() => navigation.navigate('Cart')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summary: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
