import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profiles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={Home}
          options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}
 
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: 'Setting Page' }}/>
      <Stack.Screen
        name="Details"
        component={Profile}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}




const App = () => {
  return (
   
      <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="home"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }}  />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Settings',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="settings"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }} />
      </Tab.Navigator>
      </NavigationContainer>
      
    
  )
}

export default App