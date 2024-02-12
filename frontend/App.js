import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLOR } from './theme/theme'
import Auth from './src/Auth'
import Map from './src/pages/Map';
import Account from './src/pages/Account';
import Friends from './src/pages/Friends';

const BottomTab = createBottomTabNavigator();

export default function App() {
  // const [isAuth, setIsAuth] = useState(false)
  const [isAuth, setIsAuth] = useState(true)

  return (
      <NavigationContainer>
    {/* <View style={styles.container}> */}
      <StatusBar style="auto" />
      {isAuth ?
        <BottomTab.Navigator>
          <BottomTab.Screen name='Map' component={Map}/>
          <BottomTab.Screen name='Friends' component={Friends}/>
          <BottomTab.Screen name='Account' component={Account}/>
        </BottomTab.Navigator>
      :
      <Auth/>
    }
    {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLOR.lightBlue100
  }
})