import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../theme';
import {Avatar} from 'react-native-paper';
theme;
const ImageOverlap = ({props}) => {
  return (
    <View
      style={{
        height: 200,
      }}>
      <View style={styles.overLap} />
      <View style={styles.imageView}>
        <View>
          <Avatar.Image
            size={150}
            style={styles.overLayImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            }}
          />
        </View>
      </View>
      <View style={styles.overLap2} />
    </View>
  );
};

export default ImageOverlap;

const styles = StyleSheet.create({
  overLap: {
    flex: 1,
    backgroundColor: theme.colors.blue2,
  },
  overLap2: {
    flex: 1,
    backgroundColor: theme.colors.blue3,
  },
  imageView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  overLayImg: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 6,
    borderColor: theme.colors.blue3,
  },
});
