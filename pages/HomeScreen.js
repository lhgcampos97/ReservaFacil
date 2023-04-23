import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const posicaoAtualLat = -23.646884168116895
const posicaoAtualLon = -46.53820057346242

const DATA = [
  {
    id: '1',
    name: 'Yamato Sushi',
    address: 'R. das Palmeiras, 421',
    waitTime: '25',
    rating: 4.4,
    coordinate: {
      latitude: -23.64718507224241,
      longitude: -46.558526857618706,
    },
  },
  {
    id: '2',
    name: 'Restaurante La Cantina',
    address: 'R. Padre Manoel de Paiva, 66',
    waitTime: '20',
    rating: 4.5,
    coordinate: {
      latitude: -23.653686335658488,
      longitude: -46.515540965840696,
    },
  },
  {
    id: '3',
    name: 'Sí Señor',
    address: 'R. das Caneleiras, 555',
    waitTime: '30',
    rating: 4.4,
    coordinate: {
      latitude: -23.647553947523825,
      longitude: -46.54054557494435,
    },
  },
  {
    id: '4',
    name: 'Pilão Mineiro Restaurante',
    address: 'Av. Dom Pedro II, 1172',
    waitTime: '40',
    rating: 4.6,
    coordinate: {
      latitude: -23.64573496922144,
      longitude: -46.53762754155964,
    },
  },
];

const RestaurantCard = ({ name, address, waitTime, rating, latitude, longitude}) => {
  const distance = (Math.sqrt(Math.pow(((posicaoAtualLon - longitude)*111), 2) + Math.pow(((posicaoAtualLat - latitude)*111), 2))).toFixed(2);
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.waitTime}>{waitTime} MIN</Text>
      <Text style={styles.distance}>{distance} KM</Text>
      <Text style={styles.rating}>{rating} stars</Text>
    </TouchableOpacity>
  );

};

const HomeScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <RestaurantCard name={item.name} address={item.address} waitTime={item.waitTime} rating={item.rating} latitude={item.coordinate.latitude} longitude={item.coordinate.longitude} />
  );


  return (
    <View style={styles.container}>
      <MapView
        style={[styles.map, { minHeight: 200 }]}
        initialRegion={{
          latitude: -23.646884168116895,
          longitude: -46.53820057346242,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        {DATA.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.name}
            description={marker.address}
          />
        ))}
      </MapView>
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
    backgroundColor: '#f7f7f7',
  },
  map: {
    flex: 7,
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
    color: '#FA6559',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  waitTime: {
    fontSize: 10,
    color: '#777',
  },
  distance: {
    fontSize: 10,
    color: '#777',
  },
  rating: {
    fontSize: 8,
    color: '#777',
  },
});
export default HomeScreen;