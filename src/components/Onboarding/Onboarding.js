import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import {SIZES, data} from '../../constants';
import OnboardingList from './OnboardingList';
import OnboardingNext from './OnboardingNext';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);
  const viewableItemsChanges = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = async () => {
    if (currentIndex < data.onboardingData.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      try {
        // await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (error) {
        console.log('error');
      }
    }
  };

  const isLastIndex = currentIndex === data.onboardingData.length - 1;
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={data.onboardingData}
          renderItem={({item}) => <OnboardingList item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanges}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
        />
      </View>

      <OnboardingNext
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / data.onboardingData.length)}
        isLastIndex={isLastIndex}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
