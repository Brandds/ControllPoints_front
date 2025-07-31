import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  TabsNavigator: undefined;
  ColaboradorScreen: undefined;
  CadastroEmpresa: undefined
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type CadastroEmpresaNavigationProp = StackNavigationProp<RootStackParamList, 'CadastroEmpresa'>;
