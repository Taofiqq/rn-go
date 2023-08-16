import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {images} from '../constants';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User row */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={images.rider} style={styles.image} />

          <View>
            <Text style={{color: 'white'}}>Rider Name</Text>
            <Text style={{color: 'gray'}}>4.78</Text>
          </View>
        </View>
        {/* Mesages row */}

        <View
          style={{
            paddingVertical: 5,
            marginVertical: 10,
            borderBottomColor: '#919191',
            borderTopColor: '#919191',
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}>
          <Pressable>
            <Text style={{color: 'grey', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>
        {/* Do More Row */}
        <Pressable>
          <Text style={{color: 'grey', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/* // Make moneyy */}
        <Pressable>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />

      <Pressable
        onPress={() => {
          console.warn('pressed');
        }}>
        <Text style={{color: 'black', paddingLeft: 2}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
