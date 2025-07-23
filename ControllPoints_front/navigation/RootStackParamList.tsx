import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  TabsNavigator: undefined;
  ColaboradorScreen: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
