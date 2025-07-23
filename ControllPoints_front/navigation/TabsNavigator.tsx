// src/navigation/TabsNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../pages/home/HomeScreen';
import homeOptions from './tabOptions/homeOptions';


const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
      <Tab.Screen name="ColaboradorScreen" component={HomeScreen} options={homeOptions} />
    </Tab.Navigator>
  );
}
