import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme';

const FilterCategoryBtn = ({
  icon,
  category,
  index,
  onPress,
  imgUrl,
  filter,
}) => {
  return (
    <>
      {filter === index ? (
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={['#4200FF', '#FF02C7ff']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0}}
            useAngle={true}
            angle={90}
            style={styles.linearGradient}>
            <MaterialIcons name={icon} size={25} color={theme.colors.white} />
            <Title
              style={{
                fontFamily: 'BRFirma-Bold',
                color: 'white',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 8,
              }}>
              {category}
            </Title>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.greyBtn} onPress={onPress}>
          <MaterialIcons name={icon} size={25} color={theme.colors.white} />
          <Title
            style={{
              fontFamily: 'BRFirma-Bold',
              color: 'white',
              fontWeight: '600',
              fontSize: 16,
            }}>
            {category}
          </Title>
        </TouchableOpacity>
      )}
    </>
  );
};

export default FilterCategoryBtn;

const styles = StyleSheet.create({
  linearGradient: {
    height: 44,
    borderRadius: 100,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  greyBtn: {
    height: 44,
    borderRadius: 100,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue1,
  },
});
