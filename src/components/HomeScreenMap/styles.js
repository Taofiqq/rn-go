import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  homeMapContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    position: 'relative',
  },
  map: {
    height: '100%',
    width: '100%',
  },

  notificationContainer: {
    position: 'absolute',
    top: 50,
    right: 15,
    width: 40,
    height: 40,
  },
  homeSearchContainer: {
    position: 'absolute',
    bottom: 200,
    width: 364,
    height: 141,
    marginLeft: 15,
    backgroundColor: COLORS.BG_PRIMARY_LIGHT_4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BG_PRIMARY_DARK,
  },
  searchContainer: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    borderColor: COLORS.BG_PRIMARY_DARK,
    backgroundColor: COLORS.BG_PRIMARY_LIGHT_2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  searchText: {
    marginLeft: 15,
    color: COLORS.TEXT,
    fontSize: SIZES.h3,
    fontFamily: 'Raleway-Medium',
  },
});
