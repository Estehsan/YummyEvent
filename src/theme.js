import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00FF41',
    accent: '#f2f2f2',

    bg: '#1e1d20',
    white: '#fff',

    Grey: '#8BA4BF',

    blue: '#202D4A',
    blue1: '#162136',
    blue2: '#142240',
    blue3: '#081127',
    blue5: '#0038FF',

    purple: '#BD00FF',
    orange: '#FF2F04',
    lineGrey: '#656565',
    green: '#27AE60',

    GreenGradient: {
      colors: ['#00FF41', '#00FF41'],
    },
    PurpleGradient: {
      colors: ['#BD00FF', '#BD00FF'],
    },
  },
  customShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  customShadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.21,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
