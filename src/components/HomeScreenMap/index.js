import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
  View,
} from 'react-native';
import React, {useMemo, useRef, useCallback} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import GreetingMessage from '../GreetingMessage';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import LocationSearch from '../../screens/LocationSearchScreen';
import {useNavigation} from '@react-navigation/native';
import cars from '../../constants/data/cars';

const HomeSreenMap = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onPress = () => {
    navigation.navigate('Signin');
  };
  return (
    <BottomSheetModalProvider>
      <View style={styles.homeMapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 8.4855,
            longitude: 4.6619,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {cars.map(item => (
            <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              // style={styles.markerContainer}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  transform: [
                    {
                      rotate: `${item.heading}deg`,
                    },
                  ],
                }}
                source={item.image}
              />
            </Marker>
          ))}
        </MapView>

        {/* <TouchableOpacity style={styles.notificationContainer}>
          <Icon
            name={'notifications'}
            size={30}
            color={COLORS.BG_PRIMARY_DARK}
          />
        </TouchableOpacity> */}

        <View style={styles.homeSearchContainer}>
          <GreetingMessage />
          <Pressable
            style={styles.searchContainer}
            onPress={handlePresentModalPress}>
            <Icon name="search" size={20} />
            <Text style={styles.searchText}>Where do you want to go?</Text>
          </Pressable>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
        >
          <LocationSearch />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default HomeSreenMap;
