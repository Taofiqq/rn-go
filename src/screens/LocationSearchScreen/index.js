import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from './styles';
import SearchPlacesRow from '../../components/SearchPlacesRow';
import {useNavigation} from '@react-navigation/native';

navigator.geolocation = require('@react-native-community/geolocation');
const LocationSearch = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // navigate to RiderSearchResultScreen when a user have selected origin and destination
  useEffect(() => {
    if (origin && destination) {
      navigation.navigate('RiderSearchResultScreen', {
        origin,
        destination,
      });
    }
  }, [origin, destination, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.select}>Select Address</Text>
      <GooglePlacesAutocomplete
        placeholder="Pickup Location"
        suppressDefaultStyles
        enablePoweredByContainer={false}
        styles={{
          textInput: styles.textInput,
          separator: {
            backgroundColor: '#eee',
            height: 1,
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          //   console.log(data, details);

          setOrigin({data, details});
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
        fetchDetails
        renderRow={data => <SearchPlacesRow data={data} />}
        query={{
          key: 'AIzaSyDVp7ZkUhmJ4fCHBFzETdiGcoS-F-uCpgs',
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Destination"
        suppressDefaultStyles
        enablePoweredByContainer={false}
        styles={{
          textInput: styles.textInput,
          separator: {
            backgroundColor: '#eee',
            height: 1,
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          //   console.log(data, details);
          setDestination({data, details});
        }}
        fetchDetails
        renderRow={data => <SearchPlacesRow data={data} />}
        query={{
          key: 'AIzaSyDBmq64R8WdbhWLf4MGNi_At3k0oww5WBc',
          language: 'en',
        }}
      />
    </SafeAreaView>
  );
};

export default LocationSearch;
