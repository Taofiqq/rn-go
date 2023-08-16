import React from 'react';
import {View, SafeAreaView, Text, Pressable, Alert} from 'react-native';
import {styles} from './styles';
import {AppleButton, Button, GoogleButton} from '../../components/Button';
import {
  PasswordInput,
  TextInputWithIcon,
  UserInput,
} from '../../components/TextInputs';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
const SigninScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();
  const onLogin = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const {username, password} = data;
      const res = await Auth.signIn(data.username, data.password);
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('oops', error.message);
    }
    setLoading(false);
  };

  const onSignupPress = () => {
    navigation.navigate('Signup');
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Signin with your Username</Text>
      {/* <UserInput />
      <PasswordInput /> */}

      <TextInputWithIcon
        placeholder="Enter your Username"
        secureTextEntry={false}
        value={username}
        setValue={setUsername}
      />
      <TextInputWithIcon
        placeholder={'Enter your Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />

      <Text onPress={onForgotPassword} style={styles.forgotPassword}>
        Forgot Password?
      </Text>
      <Button
        text={loading ? 'Loading...' : 'Login'}
        onPress={() => onLogin({username, password})}
        type="PRIMARY"
      />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <GoogleButton text="Sign In with Gmail" />
      <AppleButton text="Sign In with Apple" />

      <View style={styles.signUpContainer}>
        <Text style={styles.noAccount}>Don't have an Account?</Text>
        <Pressable style={styles.signUp} onPress={onSignupPress}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
