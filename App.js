import {StyleSheet, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
// import 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen';

import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Title,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'BRFirma-Regular',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <StatusBar animated={true} backgroundColor="#fff" /> */}
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
