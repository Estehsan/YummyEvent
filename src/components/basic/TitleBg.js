import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {theme} from '../../theme';
import Heading from './Heading';

const TitleBg = ({children, title}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.blue3,
      }}>
      <View style={styles.TitleInfo}>
        <Heading>{title}</Heading>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default TitleBg;

const styles = StyleSheet.create({
  TitleInfo: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.blue2,
    paddingVertical: 20,
  },
});
