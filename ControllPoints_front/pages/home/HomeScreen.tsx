import React from 'react';
import { Text, View } from 'react-native';

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;
