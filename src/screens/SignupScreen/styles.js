import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headingText: {
    fontSize: SIZES.h3 * 1.2,
    fontFamily: 'Raleway-Regular',
    marginTop: SIZES.body1 * 2,
    marginBottom: SIZES.body1 * 2,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 20,
    color: COLORS.DANGER,
    marginBottom: 30,
    fontFamily: 'Raleway-Medium',
  },
  line: {
    height: 1,
    width: 150,
    backgroundColor: '#ccc',
  },

  orText: {
    marginHorizontal: 10,
    color: '#9B9B9B',
    fontSize: SIZES.h2,
    fontFamily: 'Raleway-Medium',
  },

  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noAccount: {
    marginRight: 5,
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h3,
  },

  signUpText: {
    color: COLORS.BG_PRIMARY_DARK,
    fontFamily: 'Raleway-Medium',
    fontSize: SIZES.h3,
    fontWeight: SIZES.regular,
  },
});
