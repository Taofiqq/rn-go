import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import RouteMap from '../../components/RouteMap';
import {useRoute} from '@react-navigation/native';
import CarTypes from '../../components/CarTypes';

const RiderSearchResultScreen = () => {
  const route = useRoute();

  const {origin, destination} = route.params;
  return (
    <View>
      <RouteMap origin={origin} destination={destination} />
      <CarTypes />
    </View>
  );
};

export default RiderSearchResultScreen;
