import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  BG_PRIMARY_DARK: '#008955',
  BG_PRIMARY_LIGHT: '#52C498',
  BG_PRIMARY_LIGHT_2: '#e2f5ed',
  BG_PRIMARY_LIGHT_3: '#e8f5e9',
  BG_PRIMARY_LIGHT_4: '#B9e5d1',
  TEXT: '#898989',
  SUB_TEXT: '#A0A0A0',
  DEFAULT_TEXT: '#000000',
  WHITE: '#fff',
  DANGER: '#f44336',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // font weight
  light: 200,
  regular: 400,
  bold: 700,

  // app dimensions
  width,
  height,
};

const appConstants = {COLORS, SIZES};

export default appConstants;
