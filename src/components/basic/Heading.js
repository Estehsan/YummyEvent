import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {theme} from '../../theme';

const Heading = ({children, font, color, size}) => {
  return (
    <>
      <Text
        style={{
          fontSize: size ? size : 30,
          color: color ? color : theme.colors.white,
          fontFamily: font ? font : 'Gilroy-Bold',
          fontWeight: '700',
          letterSpacing: 1,
        }}>
        {children}
      </Text>
    </>
  );
};

export default Heading;

const styles = StyleSheet.create({});
