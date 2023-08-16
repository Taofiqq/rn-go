import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import types from '../../constants/data/types';
import Cars from '../Cars';

const CarTypes = () => {
  //   console.log('cars', types);
  return (
    <View>
      {types.map(type => (
        <Cars key={type.id} type={type} />
      ))}
    </View>
  );
};

export default CarTypes;

const styles = StyleSheet.create({});
