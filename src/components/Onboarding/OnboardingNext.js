import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../constants';
//   import { useNavigation } from "@react-navigation/native";

const OnboardingNext = ({percentage, scrollTo, isLastIndex}) => {
  // const size = 128;
  const size = 64;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  console.log(`${percentage}%`);
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage); // Trigger the animation whenever the percentage changes
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  // const navigation = useNavigation();
  const handleSkip = () => {
    //   navigation.navigate("Welcome");
    console.warn('Nexted');
  };
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            fill="#fff"
            ref={progressRef}
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            fill="transparent"
            // stroke={"red"}
            stroke={COLORS.BG_PRIMARY_DARK}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (circumference * percentage) / 100
            }
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={isLastIndex ? handleSkip : scrollTo}
        style={styles.button}
        activeOpacity={0.6}>
        {isLastIndex ? (
          <View style={styles.goContainer}>
            <Text style={styles.goText}>Go</Text>
          </View>
        ) : (
          <Icon name="arrowright" size={20} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingNext;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },

  button: {
    position: 'absolute',
    backgroundColor: COLORS.BG_PRIMARY_DARK,
    borderRadius: 155,
    padding: 8,
  },

  goContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goText: {
    color: '#fff',
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
});
