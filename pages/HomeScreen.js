import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Restaurant 1',
    address: 'Address 1',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Restaurant 2',
    address: 'Address 2',
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Restaurant 3',
    address: 'Address 3',
    rating: 4.0,
  },
  {
    id: '4',
    name: 'Restaurant 4',
    address: 'Address 4',
    rating: 4.8,
  },
];

const RestaurantCard = ({ name, address, rating }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.rating}>{rating} stars</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <RestaurantCard name={item.name} address={item.address} rating={item.rating} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#777',
  },
});

export default HomeScreen;
