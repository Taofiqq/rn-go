import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDVp7ZkUhmJ4fCHBFzETdiGcoS-F-uCpgs';
const RouteMap = ({origin, destination}) => {
  // console.log('origin', origin);
  // console.log('destination', destination);
  // const origin = {
  //   latitude: 6.45,
  //   longitude: 3.55,
  // };

  // const destination = {
  //   latitude: 6.6059,
  //   longitude: 3.349,
  // };

  // const originLocation = origin.details.geometry.location;
  // const destinationLocation = destination.details.geometry.location;

  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  console.log('originlocation', originLocation.latitude);
  console.log('destinationlocation', destinationLocation);

  return (
    <View style={[styles.container, {height: 300, backgroundColor: 'green'}]}>
      {/* <Text>Map</Text> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: originLocation.latitude,
          longitude: originLocation.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        <MapViewDirections
          origin={originLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />

        <Marker coordinate={originLocation} title={'Origin'} />
        <Marker coordinate={destinationLocation} title={'Destination'} />
      </MapView>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
