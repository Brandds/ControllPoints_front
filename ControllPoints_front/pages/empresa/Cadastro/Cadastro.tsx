import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet, Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as Yup from 'yup';
import { CadastroEmpresaNavigationProp } from '../../../navigation/RootStackParamList';
import { empresaService } from '../../../services/empresaService/empresa.service';
import { ReceitaWSResponse } from '../../../types/types';
import { DadosCadastroEmpresa } from './DadosCadastroEmpresa';



const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  fantasia: Yup.string().required('Fantasia é obrigatório'),
  cnpj: Yup.string().required('CNPJ é obrigatório'),
  abertura: Yup.string().required('Abertura é obrigatório'),
  tipo: Yup.string().required('Tipo é obrigatório'),
  natureza_juridica: Yup.string().required('Natureza jurídica é obrigatória'),
  logradouro: Yup.string().required('Logradouro é obrigatório'),
  numero: Yup.string().required('Número é obrigatório'),
  complemento: Yup.string(),
  bairro: Yup.string().required('Bairro é obrigatório'),
  municipio: Yup.string().required('Município é obrigatório'),
  uf: Yup.string().required('UF é obrigatório'),
  cep: Yup.string().required('CEP é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  situacao: Yup.string().required('Situação é obrigatória'),
  capital_social: Yup.string().required('Capital social é obrigatório'),
});

const initialValues: ReceitaWSResponse = {
  nome: '', fantasia: '', cnpj: '', abertura: '',
  tipo: '', natureza_juridica: '', logradouro: '',
  numero: '', complemento: '', bairro: '', municipio: '',
  uf: '', cep: '', telefone: '', email: '',
  situacao: '', capital_social: '',
}

const CadastroEmpresa: React.FC = () => {
  const navigation = useNavigation<CadastroEmpresaNavigationProp>();
  const [values, setValues] = React.useState<ReceitaWSResponse>(initialValues);
  const [viewMode, setViewMode] = React.useState<boolean>(false);

  const handleSubmit = (values: any) => {
    console.log('Cadastro values:', values);
    // lógica para envio à API...
  };

  function unmaskCNPJ(cnpj: string) {
    return cnpj.replace(/[^\d]+/g, '');
  }

  const handleSearchCNPJ = async (cnpj: string) => {
    const cnpjSemMasdcara = unmaskCNPJ(cnpj);
    try {
      const receita = await empresaService.buscaCNPJ(cnpjSemMasdcara);
      console.log('Empresa encontrada:', receita);
      setValues(receita);
      setViewMode(true);
    } catch (error: any) {
      const status = error?.response?.status || error?.status;
      if (status === 404) {
        console.log('Erro ao buscar CNPJ:', error);
      } else if (status === 400) {
        console.log('CNPJ inválido:', error);
        Alert.alert('CNPJ inválido', 'Por favor, verifique o CNPJ informado.');
      } else {
        console.log('Erro inesperado ao buscar CNPJ:', error);
      }
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../../../assets/images/fundoBackground.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>Preencha os dados da empresa</Text>

            <Formik
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({
                handleChange, handleBlur, handleSubmit,
                values, errors, touched,
              }) => (
                <>
                  <View style={{ marginBottom: 12, gap: 8 }}>
                    <TextInputMask
                      type={'cnpj'}
                      style={styles.input}
                      placeholder="Buscar sua empresa pelo CNPJ"
                      placeholderTextColor="#aaa"
                      value={values.cnpj}
                      onChangeText={handleChange('cnpj')}
                    />
                    <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleSearchCNPJ(values.cnpj)}>
                      <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                    {viewMode && (
                      <DadosCadastroEmpresa
                        {...values}
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      ></DadosCadastroEmpresa>
                    )}
                  </View>



                  {viewMode && values.cnpj && <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                  </TouchableOpacity>}

                  <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={styles.buttonTextSecondary}>Voltar</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    width: '100%',
    padding: 20,
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
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  buttonPrimary: {
    backgroundColor: '#23436a',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    marginTop: 12,
    padding: 12,
    alignItems: 'center',
  },
  buttonTextSecondary: {
    color: '#23436a',
    fontWeight: 'bold',
  },
});

export default CadastroEmpresa;
