import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  useColorScheme,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import GlobalCSS from './GlobalCSS';
import {theme} from '../../theme';

const Bg = ({children, imgLink}) => {
  return (
    <View style={[GlobalCSS.flex]}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.blue3,
          // paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Bg;

const styles = StyleSheet.create({});
