import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {AppleButton, Button, GoogleButton} from '../../components/Button';
import {
  PasswordInput,
  TextInputWithIcon,
  UserInput,
} from '../../components/TextInputs';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = React.useState(false);

  const onSignup = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const {username, password, email, name} = data;
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
          preferred_username: username,
        },
      });

      navigation.navigate('ConfirmEmail', {
        username,
      });
      console.log('signup res', response);
    } catch (error) {
      Alert.alert('Opps', error.message);
    }
    setLoading(false);
    // console.warn('pressed');
  };
  const onSigninPress = () => {
    navigation.navigate('Signin');
  };

  // console.log('name', name);
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headingText}>
          Signup with your Username and Password
        </Text>
        <TextInputWithIcon
          placeholder="Enter your Name"
          secureTextEntry={false}
          value={name}
          setValue={setName}
        />
        <TextInputWithIcon
          placeholder="Enter your Username"
          secureTextEntry={false}
          value={username}
          setValue={setUsername}
        />
        <TextInputWithIcon
          placeholder="Enter your Email"
          secureTextEntry={false}
          value={email}
          setValue={setEmail}
        />
        <TextInputWithIcon
          placeholder={'Enter your Password'}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <TextInputWithIcon
          placeholder={'Enter your Password Again'}
          secureTextEntry={true}
          value={repeatPassword}
          setValue={setRepeatPassword}
        />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <Button
          text={loading ? 'Loading...' : 'Sign In'}
          type="PRIMARY"
          onPress={() =>
            onSignup({
              name,
              username,
              email,
              password,
            })
          }
        />

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <GoogleButton text="Sign In with Gmail" />
        <AppleButton text="Sign In with Apple" />

        <View style={styles.signUpContainer}>
          <Text style={styles.noAccount}>Already have an account?</Text>
          <Pressable style={styles.signUp} onPress={onSigninPress}>
            <Text style={styles.signUpText}>Sign in</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignupScreen;
