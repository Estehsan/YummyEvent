import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../theme';
import {GlobalCSS, H2} from '../../basic';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ProductItem = ({item}) => {
  const {image, title, price} = item;

  return (
    <View style={styles.column}>
      <Image source={image} style={styles.image} resizeMode={'contain'} />
      <View style={[GlobalCSS.padding.yxs]}>
        <H2 size={14} color={'#fff'}>
          {title}
        </H2>
      </View>
      <H2 font={'BRFirma-Bold'} color={theme.colors.primary}>
        {price}
      </H2>
      <View style={styles.overlay}>
        <H2 font={'BRFirma-Regular'} color="#fff">
          X1
        </H2>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  column: {
    backgroundColor: theme.colors.blue1,
    alignItems: 'center',
    borderRadius: 15,
    width: '92%',
    maxWidth: '46%',
    margin: '3%',
    padding: 10,
  },
  image: {
    width: 100,

    height: 100,
    aspectRatio: 1,
  },
  overlay: {
    position: 'absolute',
    padding: 5,
    backgroundColor: '#FFA800',
    bottom: 0,
    height: 30,
    width: 30,
    right: 10,
    borderRadius: 10,
    zIndex: 1,
    top: 10,
    elevation: 1,
  },
});
