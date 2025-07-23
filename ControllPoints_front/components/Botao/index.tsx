// components/Botao/index.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../pages/colaborador/styles';

export default function Botao({ onPress, title }: { onPress: () => void; title: string }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}
