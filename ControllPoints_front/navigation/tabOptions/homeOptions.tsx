import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Início',
  tabBarIcon: ({ color, size }) => (
    <Ionicons name="home-outline" size={size} color={color} />
  ),
};

export default homeOptions;
