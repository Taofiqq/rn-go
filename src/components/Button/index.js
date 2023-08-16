import {Pressable, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../constants';

export const Button = ({text, type, onPress}) => {
  return (
    <Pressable
      style={[styles.buttonContainer, styles[`buttonContainer_${type}`]]}
      onPress={onPress}>
      <Text style={[styles.buttonText, styles[`buttonText_${type}`]]}>
        {text}
      </Text>
    </Pressable>
  );
};

export const SkipButton = ({text, type, handleSkip}) => {
  return (
    <Pressable style={styles.skipButtonContainer} onPress={handleSkip}>
      <Text style={styles.skipTest}>{text}</Text>
    </Pressable>
  );
};

export const GoogleButton = ({text}) => {
  return (
    <Pressable style={styles.authButtonContainer} onPress={() => {}}>
      <Image source={images.gmail} style={styles.authButtonIcon} />
      <Text style={styles.authButtonText}>{text}</Text>
    </Pressable>
  );
};
export const AppleButton = ({text}) => {
  return (
    <Pressable style={styles.authButtonContainer} onPress={() => {}}>
      <Image source={images.apple} style={styles.authButtonIcon} />
      <Text style={styles.authButtonText}>{text}</Text>
    </Pressable>
  );
};
