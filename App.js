import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios'

import CurrentWeather from './components/CurrentWeather'

// replace the API_KEY with your own
const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={API_KEY}&lang=fr&units=metric`

export default function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        return
      }

      const userLocation = await Location.getCurrentPositionAsync()
      getWeather(userLocation)
    })()
  }, [])

  const getWeather = async (location) => {
    try {
      const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude))

      setData(response.data)
      setLoading(false)
    } catch(e) {
      console.log(e)
    }
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CurrentWeather data={data} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E6E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
