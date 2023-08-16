import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../screens/Test';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RiderSearchResultScreen from '../screens/RiderSearchResultScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DummyScreen = ({name}) => (
  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Text>{name}</Text>
  </View>
);

const CustomHeaderLeft = ({navigation}) => (
  <TouchableOpacity
    style={{marginLeft: 50}}
    onPress={() => navigation.openDrawer()}>
    <Icon name="bars" size={25} color="black" />
  </TouchableOpacity>
);
const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomePage"
        drawerContent={props => <CustomDrawer {...props} />}
        // screenOptions={{
        //   headerShown: false,
        //   headerLeft: ({navigation}) => (
        //     <CustomHeaderLeft navigation={navigation} />
        //   ),
        // }}
      >
        <Drawer.Screen name="HomeStackScreen" component={HomeStack} />
        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={'Your Trips'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
