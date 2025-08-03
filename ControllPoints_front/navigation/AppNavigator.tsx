import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CadastroEmpresa from '../pages/empresa/Cadastro/Cadastro';
import Login from '../pages/Login ';
import TabsNavigator from './TabsNavigator';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroEmpresa" component={CadastroEmpresa} />
      <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
    </Stack.Navigator>
  );
}
