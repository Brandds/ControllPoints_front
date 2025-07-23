import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
