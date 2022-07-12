import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const Span = ({children, navigation, colorScheme, Align, font, size}) => {
  return (
    <Text
      style={{
        fontFamily: font ? font : 'BRFirma-Medium',
        textAlign: Align ? Align : 'left',
        fontSize: size ? size : 14,
        fontWeight: '500',
        color: colorScheme ? colorScheme : theme.colors.Grey,
      }}>
      {children}
    </Text>
  );
};

export default Span;

const styles = StyleSheet.create({});
