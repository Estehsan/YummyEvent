import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FilterGreyCategoryBtn = ({category, icon, onPress, imgUrl}) => {
  return (
    <LinearGradient
      colors={['#4200FF', '#FF02C7ff']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      useAngle={true}
      angle={90}
      style={styles.linearGradient}>
      <TouchableOpacity style={styles.GreenBtn} onPress={onPress}>
        <MaterialIcons name={icon} size={30} color={'red'} />
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
    </LinearGradient>
  );
};

export default FilterGreyCategoryBtn;

const styles = StyleSheet.create({
  linearGradient: {
    height: 60,
    borderRadius: 100,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-evenly',
  },

  GreenBtn: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
});
