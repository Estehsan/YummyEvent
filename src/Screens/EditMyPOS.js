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
  const [products, setProducts] = React.useState(ProductsList);
  const [filter, setFilter] = React.useState(0);
  return (
    <TitleBg title={'POS'}>
      <FilterCategory
        filter={filter}
        setFilter={setFilter}
        navigation={navigation}
        data={ProductsList}
      />
      <View style={[GlobalCSS.padding.xmd]}>
        <Title>Our Products</Title>
        <FlatList
          data={
            filter === 0
              ? ProductsList
              : ProductsList.filter(item => item.id === filter)
          }
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      </View>
    </TitleBg>
  );
};

export default EditMyPOS;

const styles = StyleSheet.create({});
