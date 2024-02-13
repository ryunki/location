import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Pressable, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { BORDER_RADIUS, COLOR, FONT_SIZE, SPACING } from './theme/theme'
import Auth from './src/Auth'
import Map from './src/pages/Map';
import Account from './src/pages/Account';
import Friends from './src/pages/Friends';
import AddUser from './src/pages/AddUser';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return <BottomTab.Navigator screenOptions={({route})=>({
    tabBarIcon: ({focused, color, size})=>{
      size = focused ? 30 : 25
      color = focused ? COLOR.blue100 : COLOR.lightBlue100
      if (route.name === 'Map'){
        return <Ionicons name='map-outline' color={color} size={size}/>
      }else if(route.name === 'Friends'){
        return <Ionicons name='people-outline' color={color} size={size}/>
      }else if(route.name === 'Account'){
        return <Ionicons name='settings-outline' color={color} size={size}/>
      }
    },
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle: {backgroundColor:COLOR.white300},

  })}>
    <BottomTab.Screen name='Map' component={Map}/>
    <BottomTab.Screen name='Friends' component={Friends}/>
    <BottomTab.Screen name='Account' component={Account}/>
  </BottomTab.Navigator>
}

export default function App() {
  // const [isAuth, setIsAuth] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const onPressAddUser = () => {
    console.log('add u1se2r')
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  const onPressAddFriend = () => {
    // console.log(navigation.navigate('AddUser'))
    // navigation.navigate('AddUser')
    console.log('add friend')
    return 
  }
  // if user is not logged in
  if (!isAuth){
     return <Auth setIsAuth={setIsAuth}/>
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerTitle: (props) => <Text style={styles.header}>Welcome User</Text>,
            headerTintColor: COLOR.blue100,
            headerStyle: {
              backgroundColor: COLOR.white300,
            },
          }}>
          <Stack.Screen name='Welcome' component={BottomTabs}
            options={({ navigation })=>({
              // title:null,
              // headerTintColor: 'red',
              headerRight: ()=>
                <Pressable onPress={()=>navigation.navigate('AddUser')}>
                  <Text style={styles.header}>Add friend</Text>
                </Pressable>
            })}/>
          <Stack.Screen name='AddUser' component={AddUser} />
        </Stack.Navigator>
        {/* <BottomTabs/> */}
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLOR.lightBlue100
  },
  addUserWrapper:{
    marginRight:SPACING.space_14, 
    backgroundColor:'lightgreen',
    borderRadius:BORDER_RADIUS.radius_4,
    padding:SPACING.space_6,
    color:COLOR.white100,
  },
  header:{
    color:COLOR.blue100,
    fontSize:FONT_SIZE.fontSize_18
  }
})