import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {TextInputWithIcon} from '../../components/TextInputs';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import {Auth} from 'aws-amplify';
import {SIZES} from '../../constants';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeUsername = route?.params?.username;
  const [username, setUsername] = useState(routeUsername);
  const [code, setCode] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [loadReset, setLoadReset] = React.useState(false);

  const onEmailConfirm = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    const {username, code} = data;
    console.log(code);
    try {
      await Auth.confirmSignUp(username, code);
      Alert.alert('Success', 'Email has been Successfully Verified');
      navigation.navigate('Signin');
    } catch (error) {
      Alert.alert('Sorry', error.message);
    }
    setLoading(false);
  };

  const onResendCode = async data => {
    if (loadReset) {
      return;
    }

    setLoadReset(true);
    try {
      const res = await Auth.resendSignUp(routeUsername);
      Alert.alert('Success', 'Code successfully resent');
      console.log('resend code', res);
    } catch (error) {
      Alert.alert('Sorry', error.message);
    }
    setLoadReset(false);
  };

  const onSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.headerText}>Email Verification</Text>
        {/* <TextInput placeholder={'Username'} value={username} /> */}
        <TextInputWithIcon
          placeholder={'Username'}
          secureTextEntry={false}
          value={username}
          setValue={setUsername}
        />
        <TextInputWithIcon
          placeholder={'Enter your OTP Code'}
          secureTextEntry={false}
          value={code}
          setValue={setCode}
        />

        <Button
          text={loading ? 'Verifying...' : 'Verify'}
          type="PRIMARY"
          onPress={() =>
            onEmailConfirm({
              username,
              code,
            })
          }
        />
        <Button
          text={loadReset ? 'Sending...' : 'Resend Code'}
          type="PRIMARY"
          onPress={() =>
            onResendCode({
              username,
            })
          }
        />
        <Button text={'Back to Sign up'} type="SECONDARY" onPress={onSignup} />
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    marginTop: 30,
    fontSize: SIZES.h1,
    marginBottom: 20,
  },
});
