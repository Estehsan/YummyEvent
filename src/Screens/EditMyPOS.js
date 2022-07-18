import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H1, Title, TitleBg} from '../components/basic';
import {
  FilterCategory,
  FilterEdit,
  ProductItem,
} from '../components/ScreenComp/EditMyPOSComp';
import image from './../assets/images/product/p1.png';
import ProductsList from './../assets/Data/ProductsList';

const EditMyPOS = ({navigation}) => {
  return (
    <TitleBg title={'POS'}>
      <FilterCategory navigation={navigation} data={ProductsList} />
      <View style={[GlobalCSS.padding.xmd]}>
        <Title>Our Products</Title>
        <FlatList
          data={ProductsList}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      </View>
    </TitleBg>
  );
};

export default EditMyPOS;

const styles = StyleSheet.create({});
