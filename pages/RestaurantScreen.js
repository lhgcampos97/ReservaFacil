import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { addWeeks, format } from 'date-fns';

const RestaurantScreen = ({ route, navigation }) => {
  const { name, address, waitTime, rating } = route.params;
  const [selected, setSelected] = useState('');

  // Get the current month and year
  const today = new Date();
  const maxDate = addWeeks(today, 4);
  const formattedMinDate = format(today, 'yyyy-MM-dd');
  const formattedMaxDate = format(maxDate, 'yyyy-MM-dd');

  const handleConfirmPress = () => {
    if (selected) {
      navigation.navigate('TimePickerScreen', { selectedDate: selected.dateString });
    } else {
      alert('Please select a date');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.waitTime}>{waitTime} MIN</Text>
        <Text style={styles.rating}>{rating} stars</Text>
      </View>
      <Text style={styles.selectText}>Select your date:</Text>
      <Calendar
        minDate={formattedMinDate}
        maxDate={formattedMaxDate}
        onDayPress={(day) =>  {setSelected(day.dateString);}}
        markedDates={{
             [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  address: {
    fontSize: 18,
    marginBottom: 10,
  },
  waitTime: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    color: '#777',
  },
  selectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fa6559',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RestaurantScreen;
