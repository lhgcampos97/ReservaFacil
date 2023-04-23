import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const TimePickerScreen = ({ route, navigation }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const { selectedDate } = route.params;

  const onTimeChange = (event, selected) => {
    if (event.type === 'dismissed') {
      navigation.goBack();
      return;
    }

    setSelectedTime(selected);
  };

  const onSave = () => {
    alert('Your reservation is confirmed!');
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="timePicker"
        value={selectedTime}
        mode="time"
        is24Hour={true}
        display="spinner"
        onChange={onTimeChange}
      />
      <Text style={styles.selectedTime}>
        Reservation time: {format(selectedTime, 'hh:mm a')}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>Confirm Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  selectedTime: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
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

export default TimePickerScreen;