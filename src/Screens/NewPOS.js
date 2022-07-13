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
  TextInputField,
  TitleBg,
} from '../components/basic';
import {ImageOverlap} from '../components/ScreenComp/NewPOSComp';
import {theme} from '../theme';

const NewPost = ({navigation}) => {
  return (
    <TitleBg title="New POS">
      <View style={[GlobalCSS.flex]}>
        <ImageOverlap />
        <View style={[GlobalCSS.padding.xmd, GlobalCSS.flex]}>
          <View style={[GlobalCSS.flex]}>
            <TextInputField title="ORGANIZATION NAME" placeholder="Add Name" />
            <TextInputField
              title="activity of your organisation"
              placeholder="Goods &amp; Services"
            />
          </View>
          <View style={[GlobalCSS.flex, GlobalCSS.justifyEnd]}>
            <PurpleBtn
              title="CREATE NEW POS"
              onPress={() => navigation.navigate('EditMyPOS')}
            />
          </View>
        </View>
      </View>
    </TitleBg>
  );
}; // END NewPost

export default NewPost;

const styles = StyleSheet.create({});
