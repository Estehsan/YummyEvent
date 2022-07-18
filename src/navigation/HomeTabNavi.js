import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {AddPOSCategory, EditMyPOS, NewPOS, POS} from '../Screens';
import {theme} from '../theme';

const Stack = createNativeStackNavigator();

const HomeTabNavi = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,

        headerStyle: {
          backgroundColor: theme.colors.blue2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
        },
        headerTitle: '',
        headerTitleStyle: {
          fontFamily: 'Gilroy-Bold',
          fontSize: 20,
          letterSpacing: 2,
        },
        headerTintColor: theme.colors.white,
      }}>
      {/* <Stack.Screen name="POS" component={POS} />

      <Stack.Screen name="NewPOS" component={NewPOS} /> */}
      <Stack.Screen name="EditMyPOS" component={EditMyPOS} />
      <Stack.Screen name="AddPOSCategory" component={AddPOSCategory} />
    </Stack.Navigator>
  );
};

export default HomeTabNavi;

const styles = StyleSheet.create({});
