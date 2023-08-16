import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInputWithIcon} from '../../components/TextInputs';
import {Button} from '../../components/Button';
import {Auth} from 'aws-amplify';
import {SIZES} from '../../constants';

const ResetPassword = () => {
  const route = useRoute();
  const routeUsername = route?.params?.username;
  const [username, setUsername] = React.useState(routeUsername);
  const [code, setCode] = React.useState('');
  const [newCode, setNewCode] = React.useState('');

  const navigation = useNavigation();
  const onSubmit = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      Alert.alert('Success, Password Reset Successfully');
      navigation.navigate('Signin');
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
        <Text style={styles.headerText}>Reset Your Password</Text>
        <TextInputWithIcon
          placeholder={'Enter Username'}
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
        <TextInputWithIcon
          placeholder={'Enter your New Password'}
          secureTextEntry={true}
          value={newCode}
          setValue={setNewCode}
        />

        <Button
          text="Submit"
          type="PRIMARY"
          onPress={() =>
            onSubmit({
              username,
              code,
              password: newCode,
            })
          }
        />
        <Button
          text={'Back to Sign in'}
          type="SECONDARY"
          onPress={onLoginPress}
        />
      </View>
    </View>
  );
};

export default ResetPassword;

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
