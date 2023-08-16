import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';

// export const PasswordInput = () => {
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         secureTextEntry={!showPassword}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your Password"
//         placeholderTextColor={COLORS.TEXT}
//         style={styles.input}
//       />
//       <TouchableOpacity
//         onPress={togglePasswordVisibility}
//         style={styles.iconContainer}>
//         <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
//       </TouchableOpacity>
//     </View>
//   );
// };
// export const UserInput = () => {
//   const [username, setUserName] = useState('');
//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         value={username}
//         onChangeText={setUserName}
//         placeholder="Enter Your Name"
//         placeholderTextColor={COLORS.TEXT}
//         style={styles.input}
//       />
//     </View>
//   );
// };

export const TextInputWithIcon = ({
  placeholder,
  setValue,
  secureTextEntry,
  iconName,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = text => {
    setInputValue(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.containerFocused]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry && !passwordVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {/* {secureTextEntry && (
        <Icon
          name={passwordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="#666666"
          onPress={togglePasswordVisibility}
          style={styles.icon}
        />
      )} */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   containerFocused: {
//     borderColor: '#0088FF',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//   },
//   icon: {
//     paddingHorizontal: 10,
//   },
// });

// export default TextInputWithIcon;
