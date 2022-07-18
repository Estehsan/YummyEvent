import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme';

const FilterCategoryBtn = ({item, onPress, imgUrl, selected}) => {
  return (
    <>
      {selected === 'All' ? (
        <TouchableOpacity style={styles.greyBtn} onPress={onPress}>
          <MaterialIcons
            name={item.category}
            size={25}
            color={theme.colors.white}
          />
          <Title
            style={{
              fontFamily: 'BRFirma-Bold',
              color: 'white',
              fontWeight: '600',
              fontSize: 16,
            }}>
            {item.category}
          </Title>
        </TouchableOpacity>
      ) : (
        <LinearGradient
          colors={['#4200FF', '#FF02C7ff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          useAngle={true}
          angle={90}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
            <MaterialIcons
              name={item.icon}
              size={25}
              color={theme.colors.white}
            />
            <Title
              style={{
                fontFamily: 'BRFirma-Bold',
                color: 'white',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 8,
              }}>
              {item.category}
            </Title>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </>
  );
};

export default FilterCategoryBtn;

const styles = StyleSheet.create({
  linearGradient: {
    height: 44,
    borderRadius: 100,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-evenly',
  },

  GreenBtn: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyBtn: {
    height: 44,
    borderRadius: 100,
    paddingHorizontal: 30,

    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.7,

    justifyContent: 'center',
    backgroundColor: theme.colors.blue1,
  },
});
