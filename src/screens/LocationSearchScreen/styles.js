import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 10,
    padding: 15,
  },

  textInput: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.BG_PRIMARY_LIGHT,
    borderRadius: 8,
    // marginLeft: 20,
    marginVertical: 8,
    fontFamily: 'Raleway-Regular',
  },

  select: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    textAlign: 'center',
    marginVertical: 10,
  },
});
