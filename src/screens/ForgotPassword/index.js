import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {TextInputWithIcon} from '../../components/TextInputs';
import {Button} from '../../components/Button';
import {SIZES} from '../../constants';

const ForgotPassword = () => {
  const [username, setUsername] = React.useState('');

  const navigation = useNavigation();
  const onConfirmPasswordReset = async data => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('ResetPassword', {
        username: data.username,
      });
      // console.log("password res", res);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onLoginPress = () => {
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>

        <TextInputWithIcon
          placeholder={'Enter your Username'}
          secureTextEntry={false}
          value={username}
          setValue={setUsername}
        />

        <Button
          text="Confirm"
          type="SECONDARY"
          onPress={() =>
            onConfirmPasswordReset({
              username,
            })
          }
        />
        <Button text="Back to Sign in" type="PRIMARY" onPress={onLoginPress} />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: SIZES.h1,
  },
});
