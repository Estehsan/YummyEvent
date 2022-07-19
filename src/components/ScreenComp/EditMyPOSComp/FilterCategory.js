import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FilterCategoryBtn} from './../../Common';
import {GlobalCSS} from './../../basic';
import {theme} from '../../../theme';
import Entypo from 'react-native-vector-icons/Entypo';

const FilterCategory = ({navigation, data, filter, setFilter}) => {
  return (
    <View style={styles.bg}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <>
            {index === 0 ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddPOSCategory');
                }}>
                <View style={styles.roundBtn}>
                  <Entypo name="plus" size={20} color={theme.colors.white} />
                </View>
              </TouchableOpacity>
            ) : null}

            <View style={styles.item}>
              <FilterCategoryBtn
                icon={item.icon}
                category={item.category}
                index={index}
                onPress={() => setFilter(index)}
                imgUrl={item.image}
                filter={filter}
              />
            </View>
          </>
        )}
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
