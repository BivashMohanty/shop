import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import ProductCard from '../component/ProductCard';
import productData from '../products.json';
import { CartContext } from '../context/CartContext';

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Product', { productId: item.id })}
            addToCart={() => addToCart(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      {/* <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
