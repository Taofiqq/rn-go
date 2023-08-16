import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Cars = ({type: data}) => {
  const {type, price, image_url} = data;
  return (
    <View style={styles.container}>
      {/* image */}
      <Image style={styles.image} source={image_url} />

      {/* title */}

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type}
          <Icon name="person" size={14} color="black" />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="pricetag-outline" size={24} color="green" />
        <Text style={styles.price}>est. {price}</Text>
      </View>
    </View>
  );
};

export default Cars;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  middleContainer: {
    alignItems: 'center',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {},
  rightContainer: {
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});
