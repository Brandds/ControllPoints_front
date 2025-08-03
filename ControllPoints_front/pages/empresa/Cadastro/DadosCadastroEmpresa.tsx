import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { FormikHandlers } from "formik";
import { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ibgeService } from "../../../services/integracoes/ibge/ibge.service";
import { IBGEEstado } from "../../../types/types";


type Props = {
  nome: string;
  fantasia: string;
  abertura: string;
  tipo: string;
  capital_social: string;
  telefone: string;
  email: string;
  situacao: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  natureza_juridica: string;
  handleChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  errors: { [key: string]: string | undefined };
  touched: { [key: string]: boolean | undefined };
}

export const DadosCadastroEmpresa: React.FC<Props> = (values: Props) => {
  const [showDataAbertura, setShowDataAbertura] = useState(false);
  const [optionsEstados, setOptionsEstados] = useState<IBGEEstado[]>()

  const onChangeDataAbertura = (event: any, selectedDate?: Date) => {
    setShowDataAbertura(Platform.OS === 'ios');
    if (selectedDate) {
      const dataFormatada = selectedDate.toLocaleDateString('pt-BR');
      values.handleChange('abertura')(dataFormatada);
    }
  };

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await ibgeService.getEstados();
        setOptionsEstados(response.data);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os estados. Tente novamente mais tarde.');
      }
    };
    fetchEstados();
  }, []);

  return (
    <View style={{ gap: 12 }}>
      <TextInput
        placeholder="Nome da Empresa"
        style={styles.input}
        value={values.nome}
        onChangeText={values.handleChange('nome')}
      ></TextInput>
      {values.touched.nome && values.errors.nome && (
        <Text style={{ color: 'red' }}>{values.errors.nome}</Text>
      )}
      <TextInput
        placeholder="Identidade da empresa"
        style={styles.input}
        value={values.fantasia}
        onChangeText={values.handleChange('fantasia')}
      ></TextInput>
      {values.touched.fantasia && values.errors.fantasia && (
        <Text style={{ color: 'red' }}>{values.errors.fantasia}</Text>
      )}
      <TouchableOpacity onPress={() => setShowDataAbertura(true)}>
        <View pointerEvents="none">
          <TextInput
            placeholder="Data de Abertura"
            style={styles.input}
            value={values.abertura}
            editable={false}
          />
        </View>
      </TouchableOpacity>
      {showDataAbertura && (
        <DateTimePicker
          value={values.abertura ? new Date(values.abertura.split('/').reverse().join('-')) : new Date()}
          mode="date"
          display="default"
          onChange={onChangeDataAbertura}
        />
      )}
      {values.touched.abertura && values.errors.abertura && (
        <Text style={{ color: 'red' }}>{values.errors.abertura}</Text>
      )}
      <Picker
        selectedValue={values.tipo}
        onValueChange={values.handleChange('tipo')}
        style={styles.inputSelect}
      >
        <Picker.Item label="Selecione o tipo da empresa" value="" />
        <Picker.Item label="Matriz" value="MATRIZ" />
        <Picker.Item label="Filial" value="FILIAL" />
      </Picker>
      {values.touched.tipo && values.errors.tipo && (
        <Text style={{ color: 'red' }}>{values.errors.tipo}</Text>
      )}
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        placeholder="Telefone"
        style={styles.input}
        value={values.telefone}
        onChangeText={values.handleChange('telefone')}
      />
      {values.touched.telefone && values.errors.telefone && (
        <Text style={{ color: 'red' }}>{values.errors.telefone}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={values.handleChange('email')}
      />
      <Picker
        selectedValue={values.situacao}
        onValueChange={values.handleChange('situacao')}
        style={styles.inputSelect}
      >
        <Picker.Item label="Selecione a situação da empresa" value="" />
        <Picker.Item label="Baixada" value="BAIXADA" />
        <Picker.Item label="Inoperante" value="INOPERANTE" />
      </Picker>
      {values.touched.situacao && values.errors.situacao && (
        <Text style={{ color: 'red' }}>{values.errors.situacao}</Text>
      )}
      <TextInput
        placeholder="Natureza jurídica da empresa"
        style={styles.input}
        value={values.natureza_juridica}
        onChangeText={values.handleChange('natureza_juridica')}
      ></TextInput>
      {values.touched.natureza_juridica && values.errors.natureza_juridica && (
        <Text style={{ color: 'red' }}>{values.errors.natureza_juridica}</Text>
      )}
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={styles.title}>Endereço</Text>
      </View>
      <TextInput
        placeholder="Digite a rua/avenida da empresa"
        style={styles.input}
        value={values.logradouro}
        onChangeText={values.handleChange('logradouro')}
      ></TextInput>
      {values.touched.logradouro && values.errors.logradouro && (
        <Text style={{ color: 'red' }}>{values.errors.logradouro}</Text>
      )}
      <TextInput
        placeholder="Digite o numero do local da empresa"
        style={styles.input}
        value={values.numero}
        onChangeText={values.handleChange('numero')}
      ></TextInput>
      {values.touched.numero && values.errors.numero && (
        <Text style={{ color: 'red' }}>{values.errors.numero}</Text>
      )}
      <TextInput
        placeholder="Digite o complemento do local da empresa"
        style={styles.input}
        value={values.complemento}
        onChangeText={values.handleChange('complemento')}
      ></TextInput>
      {values.touched.complemento && values.errors.complemento && (
        <Text style={{ color: 'red' }}>{values.errors.complemento}</Text>
      )}
      <TextInput
        placeholder="Digite o bairro  da empresa"
        style={styles.input}
        value={values.bairro}
        onChangeText={values.handleChange('bairro')}
      ></TextInput>
      {values.touched.bairro && values.errors.bairro && (
        <Text style={{ color: 'red' }}>{values.errors.bairro}</Text>
      )}
      <TextInput
        placeholder="Digite o municipio  da empresa"
        style={styles.input}
        value={values.municipio}
        onChangeText={values.handleChange('municipio')}
      ></TextInput>
      {values.touched.municipio && values.errors.municipio && (
        <Text style={{ color: 'red' }}>{values.errors.municipio}</Text>
      )}
      <Picker
        selectedValue={values.uf}
        onValueChange={values.handleChange('uf')}
        style={styles.inputSelect}
      >
        <Picker.Item label="Selecione o estado da empresa" value="" />
        {optionsEstados?.map((estado) => (
          <Picker.Item key={estado.sigla} label={estado.nome} value={estado.sigla} />
        ))}

        <Picker.Item label="SP" value="SP" />
      </Picker>
      {values.touched.uf && values.errors.uf && (
        <Text style={{ color: 'red' }}>{values.errors.uf}</Text>
      )}
      <TextInputMask
        type={'zip-code'}
        placeholder="Digite o CEP da empresa"
        style={styles.input}
        value={values.cep}
        onChangeText={values.handleChange('cep')}
      />
      {values.touched.cep && values.errors.cep && (
        <Text style={{ color: 'red' }}>{values.errors.cep}</Text>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  inputSelect: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#23436a',
  },
})