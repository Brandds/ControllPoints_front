import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginScreenNavigationProp } from "../navigation/RootStackParamList";
import colors from "../theme/colors";


type Props = {

}
const { width, height } = Dimensions.get('window');

const Login: React.FC<Props> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleEsqueceuSenha = () => {
    // navigation.navigate(''); // ajuste se for outro nome da rota
  };
  const handleCadastro = () => {
    // navigation.navigate('Cadastro'); // ajuste se for outro nome da rota
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/fundoBackground.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
            // Aqui você pode adicionar a lógica de autenticação
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (<View style={styles.overlay}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Acesse sua conta</Text>

            {/* CAMPOS DE LOGIN */}
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />

            {/* LINK ESQUECEU A SENHA */}
            <TouchableOpacity onPress={handleEsqueceuSenha}>
              <Text style={styles.linkText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* BOTÃO DE CADASTRO */}
            <TouchableOpacity style={styles.buttonSecondary} onPress={handleCadastro}>
              <Text style={styles.buttonTextSecondary}>Criar conta</Text>
            </TouchableOpacity>
          </View>)}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "90%",
    padding: 24,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.card,
    marginTop: 8,
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.card,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
  linkText: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSecondary: {
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTextSecondary: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Login;