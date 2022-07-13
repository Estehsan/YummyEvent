import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const H3 = ({children, font, color, size, textTransform}) => {
  return (
    <>
      <Text
        style={{
          fontSize: size ? size : 12,
          color: color ? color : theme.colors.accent,
          fontFamily: font ? font : 'Gilroy-SemiBold',
          fontWeight: '600',
          // letterSpacing: 2,
          lineHeight: 24,
          textTransform: textTransform ? textTransform : 'capitalize',
        }}>
        {children}
      </Text>
    </>
  );
};

export default H3;

const styles = StyleSheet.create({});
