import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchPlacesRow = ({data}) => {
  // console.log('Hey', data.description);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Icon name="location" size={15} color="black" />
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default SearchPlacesRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 10,
  },
  locationText: {},
});
