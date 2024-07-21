import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>Rs {product.price}/-</Text>
      {cartItem ? (
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(product.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(product.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // <Button title="Add to Cart" onPress={() => addToCart(product)} />
        <TouchableOpacity style={styles.add} onPress={() => addToCart(product)}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#f4f3e7',
    marginBottom: 10,
    paddingTop: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center'
   
  
    
  },
  image: {
    width: 300,
    height: 300,
    borderRadius:20
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    fontSize: 24,
    width: 30,
    textAlign: 'center',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  add: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10
  }
});

export default ProductCard;
