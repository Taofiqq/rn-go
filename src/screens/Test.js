import {Pressable, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Test = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView>
      <Text>Testssssss</Text>

      <Pressable onPress={onPress}>
        <Text>Pressabless</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({});
