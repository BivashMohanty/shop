import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { CartContext } from '../context/CartContext';
import productData from '../products.json';

const ProductScreen = ({ route }) => {
  const { productId } = route.params;
  const product = productData.find(p => p.id.toString() === productId.toString());
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: '#777',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProductScreen;
