import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from 'react-native-paper';
import {theme} from '../../theme';

const PurpleBtn = ({children, title, onPress, LeftIcon, navigation, width}) => {
  return (
    <LinearGradient
      colors={['#4200FF', '#FF02C7ff']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      useAngle={true}
      angle={90}
      style={[
        styles.linearGradient,
        {
          width: width ? width : '100%',
        },
      ]}>
      {LeftIcon === 'true' ? (
        <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
          {children}
          <Title
            style={{
              fontFamily: 'BRFirma-Regular',
              color: 'white',
              textTransform: 'uppercase',
            }}>
            {title}
          </Title>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
          <Title
            style={{
              fontFamily: 'BRFirma-Bold',
              color: 'white',
              fontSize: 16,
            }}>
            {title}
          </Title>
          {children}
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default PurpleBtn;

const styles = StyleSheet.create({
  linearGradient: {
    height: 60,
    borderRadius: 15,

    // ...theme.customShadow,
  },

  GreenBtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
