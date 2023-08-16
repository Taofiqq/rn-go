import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Router from './src/navigation/router';
// import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify, Auth} from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
// import Router from './src/navigation/routes';

navigator.geolocation = require('@react-native-community/geolocation');
function App() {
  useEffect(() => {
    // request authorixation
    Geolocation.requestAuthorization();
  });
  return <Router />;
}
export default App;
// export default withAuthenticator(App);
