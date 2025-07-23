import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LoginScreenNavigationProp } from "../navigation/RootStackParamList";


type Props = {

}
const { width, height } = Dimensions.get('window');

const Login: React.FC<Props> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/fundoBackground.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>
          {/* Inputs e botões vão aqui */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // evita que fique preto por trás da imagem
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '90%',
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#23436a',
  },
  subtitle: {
    fontSize: 16,
    color: '#37404a',
    marginTop: 8,
  },
});
export default Login;