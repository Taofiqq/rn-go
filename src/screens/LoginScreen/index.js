import React from 'react';
import {View, SafeAreaView, Text, Pressable} from 'react-native';
import {styles} from './styles';
import {AppleButton, Button, GoogleButton} from '../../components/Button';
import {
  PasswordInput,
  TextInputWithIcon,
  UserInput,
} from '../../components/TextInputs';
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Sign In with your Username</Text>
      {/* <UserInput />
      <PasswordInput /> */}

      <TextInputWithIcon
        placeholder="Enter your Username"
        secureTextEntry={false}
      />
      <TextInputWithIcon
        placeholder={'Enter your Password'}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Button text="Sign In" type="PRIMARY" />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <GoogleButton text="Sign In with Gmail" />
      <AppleButton text="Sign In with Apple" />

      <View style={styles.signUpContainer}>
        <Text style={styles.noAccount}>Don't have an Account?</Text>
        <Pressable style={styles.signUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
