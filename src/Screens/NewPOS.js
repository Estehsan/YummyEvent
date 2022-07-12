import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Bg,
  GlobalCSS,
  GreenBtn,
  H1,
  H2,
  Heading,
  PurpleBtn,
  TitleBg,
} from '../components/basic';

const NewPost = () => {
  return (
    <TitleBg title="New POS" style={[]}>
      <View
        style={[
          GlobalCSS.alignCenter,
          GlobalCSS.justifyCenter,
          GlobalCSS.alignItemsCenter,
          GlobalCSS.flex,
          GlobalCSS.padding.xmd,
        ]}>
        <Image source={require('./../assets/images/EmptyList.png')} />
        <View style={[GlobalCSS.padding.ylg]} />
        <Heading>Your List is Empty</Heading>
        <View style={[GlobalCSS.padding.ysm]} />

        <H2>You have not created any POS yet, Create a new one.</H2>
        <View style={[GlobalCSS.padding.ymd]} />

        <PurpleBtn width="60%" title={'CREATE NEW POS'} />
      </View>
    </TitleBg>
  );
}; // END NewPost

export default NewPost;

const styles = StyleSheet.create({});
