import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GlobalCSS,
  PurpleBtn,
  TextInputField,
  TitleBg,
} from '../components/basic';
import {theme} from '../theme';

const AddPOSCategory = ({navigation}) => {
  return (
    <TitleBg title="Add Product">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overLap}>
          <View
            style={[
              GlobalCSS.flex,
              {
                backgroundColor: theme.colors.blue2,
              },
            ]}></View>
          <View style={styles.overLapContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2865&q=80',
              }}
              style={styles.overLayImg}
            />
          </View>

          <View
            style={[
              GlobalCSS.flex,
              {
                backgroundColor: theme.colors.blue3,
              },
            ]}></View>
        </View>
        <View
          style={[
            GlobalCSS.padding.xmd,
            GlobalCSS.flex,
            GlobalCSS.padding.ymd,
          ]}>
          <View style={[GlobalCSS.flex]}>
            <TextInputField title="ORGANIZATION NAME" placeholder="Add Name" />
            <TextInputField
              title="activity of your organisation"
              placeholder="Goods &amp; Services"
            />
            <TextInputField
              title="Category"
              placeholder="Goods &amp; Baverages"
            />
            <TextInputField title="Priority" placeholder="Urjent" />
          </View>
        </View>
        <View style={[GlobalCSS.padding.ylg]} />
      </ScrollView>
      <View
        style={[GlobalCSS.padding.xmd, GlobalCSS.flex, GlobalCSS.justifyEnd]}>
        <PurpleBtn
          title="CREATE NEW POS"
          onPress={() => navigation.navigate('EditMyPOS')}
        />
      </View>
    </TitleBg>
  );
};

export default AddPOSCategory;

const styles = StyleSheet.create({
  overLap: {
    backgroundColor: '#00bcd4',
    height: 200,
  },
  overLapContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  overLayImg: {
    width: '90%',
    height: 200,
    borderRadius: 15,
  },
});
