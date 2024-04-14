import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../utlis/func';

export const FontFamily = {
  regular: 'AirbnbCereal_W_Lt',
  medium: 'AirbnbCereal_W_Md',
  semiBold: 'AirbnbCereal_W_Bd',
  bold: 'AirbnbCereal_W_XBd',
}

export const appInfo = {
  sizes: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  BASE_URL: 'https://eventhub-sever.onrender.com',
};

export const appColors = {
  primary: '#5669FF',
  white: '#ffffff',
  white2: '#fcfcfc',
  text: '#120D26',
  gray: '#807A7A',
  gray2: '#DADADA',
  gray3: '#E4DFDF',
  gray4: '#9d9898',
  gray5: '#d9d9d9',
  link: '#5669FF',
  danger: '#e74c3c',
};


