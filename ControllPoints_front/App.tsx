// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import { store } from './store/slices';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  );
}
