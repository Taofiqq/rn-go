import {Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';

const GreetingMessage = () => {
  const [greetingMessage, setGreetingMessage] = useState('');

  const currentHour = new Date().getHours();
  console.log(currentHour);

  useEffect(() => {
    if (currentHour < 12) {
      setGreetingMessage('Good Morning');
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGreetingMessage('Good Afternoon');
    } else {
      setGreetingMessage('Good Evening');
    }
  }, [currentHour]);
  return (
    <View style={styles.container}>
      <Text style={styles.greetingMessage}>{greetingMessage}</Text>
    </View>
  );
};

export default GreetingMessage;
