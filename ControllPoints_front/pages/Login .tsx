import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from 'yup';
import { CadastroEmpresaNavigationProp } from "../navigation/RootStackParamList";
import { empresaService } from "../services/empresaService/empresa.service";
import colors from "../theme/colors";


type Props = {

}
const { width, height } = Dimensions.get('window');

const Login: React.FC<Props> = () => {
  const navigation = useNavigation<CadastroEmpresaNavigationProp>();

  const handleEsqueceuSenha = () => {
    // navigation.navigate(''); // ajuste se for outro nome da rota
  };
  const handleCadastro = () => {
    navigation.navigate('CadastroEmpresa'); // ajuste se for outro nome da rota
  };

  const handleSubmit = async () => {
    try {
      const response = await empresaService.buscaCNPJ("12345678000195");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/fundoBackground.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values) => {
            const response = await empresaService.buscaCNPJ("12345678000195");
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('E-mail inválido')
              .required('E-mail é obrigatório'),
            password: Yup.string()
              .min(6, 'A senha deve ter pelo menos 6 caracteres')
              .required('Senha é obrigatória'),
          })}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (<View style={styles.overlay}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Acesse sua conta</Text>

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />

            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={handleEsqueceuSenha}>
              <Text style={styles.linkText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
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
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },
});
export default Login;