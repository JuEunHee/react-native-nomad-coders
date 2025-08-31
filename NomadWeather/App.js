import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Location from 'expo-location';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] = useState('Loading...');
  const [ok, setOk] = useState(true);

  const ask = async () => {
    // 위치 정보 권한 요청
    const { granted } = await Location.requestForegroundPermissionsAsync();
    
    if (!granted) {
      setOk(false);
    }

    // accuracy: 5 -> 도시 정도의 정확도로 위치 정보를 가져옴
    const getCurrentLocation = await Location.getCurrentPositionAsync({
      accuracy: 5
    });
    const { latitude, longitude } = getCurrentLocation.coords;
    const location = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    }, { useGoogleMaps: false });

    console.log(location)
    console.log(location[0].city ?? location[0].region);

    setLocation(location[0].city ?? location[0].region);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    /**
     * @see https://reactnative.dev/docs/next/scrollview
     */
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{location}</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.weather}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 58,
    fontWeight: '500',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temperature: {
    marginTop: 50,
    fontSize: 178,
    fontWeight: '600',
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});