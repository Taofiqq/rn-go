import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {SkipButton} from '../Button';

const OnboardingList = ({item}) => {
  const {image, title, description} = item;
  //   const navigation = useNavigation();
  const handleSkip = () => {
    // navigation.navigate("Welcome");
    console.warn('pressed');
  };
  return (
    <View style={styles.container}>
      <SkipButton text="Skip" handleSkip={handleSkip} />
      <Image source={image} style={styles.image} />

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description} </Text>
      </View>
    </View>
  );
};

export default OnboardingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: SIZES.width,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: SIZES.h2,
    marginBottom: 10,
    marginTop: 28,
    color: COLORS.DEFAULT_TEXT,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  description: {
    fontWeight: '400',
    color: COLORS.SUB_TEXT,
    textAlign: 'center',
    paddingHorizontal: 52,
  },
  skipButton: {position: 'absolute', top: 55, right: 20},
});
