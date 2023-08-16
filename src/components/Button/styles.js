import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52.8,
    borderRadius: 10,
    width: 340,
    marginVertical: 12,
  },

  buttonContainer_PRIMARY: {
    backgroundColor: COLORS.BG_PRIMARY_DARK,
  },

  buttonContainer_SECONDARY: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.BG_PRIMARY_DARK,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: SIZES.h3,
    fontWeight: SIZES.bold,
    fontFamily: 'Raleway-Medium',
  },
  buttonText_PRIMARY: {
    color: COLORS.WHITE,
  },
  buttonText_SECONDARY: {
    color: COLORS.BG_PRIMARY_DARK,
  },
  skipButtonContainer: {
    position: 'absolute',
    top: 65,
    right: 30,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.BG_PRIMARY_DARK,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
  },
  skipTest: {
    textAlign: 'center',
    color: COLORS.BG_PRIMARY_DARK,
    fontSize: SIZES.h4,
    fontWeight: SIZES.medium,
  },

  authButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 100,
    paddingVertical: 15,
    marginBottom: 20,
  },
  authButtonIcon: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  authButtonText: {
    color: COLORS.TEXT,
    fontSize: SIZES.h3,
    fontFamily: 'Raleway-Medium',
  },
});
