import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from '../../screens/Believer/HomePage';
import HomePage1 from '../../screens/Believer/HomePage1';
import OfferingPage from '../../screens/Believer/OfferingPage';

const Stack = createNativeStackNavigator();

function BelieverHomeStack(){
  return (
    <Stack.Navigator
        screenOption = {{ headerShown: false }}
        initialRouteName='HomePage'
    >
      <Stack.Screen
        name = 'HomePage'
        component = { HomePage }
        options = {{ headerShown: false }}
      />
      <Stack.Screen
        name = 'HomePage1'
        component = { HomePage1 }
        options = {{ headerShown: false }}
      />
      <Stack.Screen
        name = 'OfferingPage'
        component = { OfferingPage }
        options = {{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default BelieverHomeStack;