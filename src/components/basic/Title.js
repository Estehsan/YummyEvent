import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../../theme';

const Title = ({children, font, color}) => {
  return (
    <>
      <Text
        style={{
          fontSize: 22,
          color: color ? color : theme.colors.white,
          fontFamily: font ? font : 'Gilroy-Bold',
          fontWeight: '700',
          letterSpacing: 1,
          lineHeight: 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default Title;

const styles = StyleSheet.create({});
