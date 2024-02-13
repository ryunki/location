import React, {useState, useEffect} from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { COLOR, BORDER_RADIUS, FONT_SIZE, SPACING } from '../../theme/theme'

import MapView,{Marker} from 'react-native-maps'
import * as Location from 'expo-location'

const friends ={
  "friend1":{
    longitude:127.1212809,
    latitude:36.8096204,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  }
}

const Map = () => {

  const [location, setLocation] = useState({
      latitude: 1,
      longitude: 1,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001}
    )
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(prev=>({...prev, 
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }))
    })()
  }, [])
  console.log(location)

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={location}
        showsUserLocation={true}
        loadingEnabled={true}
      >
        {Object.entries(friends).map(([friend, info],idx)=>(
          <Marker
            key={idx}
            coordinate={info}
            title={friend}
            />
        ))}
      </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});