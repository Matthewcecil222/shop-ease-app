import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ProductCard
      image={item.image}
      name={item.name}
      price={item.price}
      rating={item.rating}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 8,
  },
});
