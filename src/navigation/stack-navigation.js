import 'react-native-gesture-handler';
import React from 'react';
import {default as theme} from '../assets/custom-theme/custom-theme.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/landing-screen';
import {HomeScreen} from '../screens/home-screen';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="landingScreen"
        title=""
        component={LandingScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme['color-primary-400'],
          },
          headerTintColor: '#2E3A59',
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        title=""
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme['color-primary-500'],
          },
          headerTintColor: '#2E3A59',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
