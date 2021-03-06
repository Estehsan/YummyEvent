import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const H2 = ({children, font, color, size}) => {
  return (
    <>
      <Text
        style={{
          fontSize: size ? size : 16,
          textAlign: 'center',
          color: color ? color : theme.colors.Grey,
          fontFamily: font ? font : 'BRFirma-Regular',
          fontWeight: '500',
          // letterSpacing: 1,
          lineHeight: 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default H2;

const styles = StyleSheet.create({});
