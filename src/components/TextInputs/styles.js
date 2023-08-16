import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 340,
  },
  iconContainer: {
    marginLeft: 10,
  },

  containerFocused: {
    borderColor: COLORS.BG_PRIMARY_DARK,
  },
  icon: {
    // paddingHorizontal: 10,
  },
});
