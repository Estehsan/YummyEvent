import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FilterCategoryBtn} from './../../Common';
import {GlobalCSS} from './../../basic';
import {theme} from '../../../theme';
import Entypo from 'react-native-vector-icons/Entypo';

// const data = [
//   {
//     id: 1,
//     category: 'Fast Food',
//     icon: 'fastfood',
//   },
//   {
//     id: 2,
//     category: 'Drinks',
//     icon: 'local-drink',
//   },
//   {
//     id: 3,
//     category: 'Snacks',
//     icon: 'local-dining',
//   },
//   {
//     id: 4,

//     category: 'Desserts',
//     icon: 'local-cafe',
//   },

//   {
//     id: 214,
//     category: 'Desserts',
//     icon: 'local-cafe',
//   },

//   {
//     id: 412,
//     category: 'Desserts',
//     icon: 'local-cafe',
//   },
//   {
//     id: 5345,
//     category: 'Desserts',
//     icon: 'local-cafe',
//   },
//   {
//     id: 412412,
//     category: 'Desserts',
//     icon: 'local-cafe',
//   },
// ];

const FilterCategory = ({navigation, data}) => {
  const [selected, setSelected] = React.useState('All');
  return (
    <View style={styles.bg}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <>
              {index === 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddPOSCategory');
                  }}
                  style={styles.roundBtn}>
                  <Entypo name="plus" size={25} color={theme.colors.white} />
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  setSelected(item.id);
                }}
                style={styles.item}>
                <FilterCategoryBtn selected item={item} />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default FilterCategory;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: theme.colors.blue2,
    paddingVertical: 17,
    marginBottom: 10,
  },
  roundBtn: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  item: {
    paddingHorizontal: 10,
  },
});
