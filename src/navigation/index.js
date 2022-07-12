import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavi from './HomeTabNavi';
import AuthTabNavi from './AuthTabNavi';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="AuthTabNavi"
        component={AuthTabNavi}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTabNavi"
        component={HomeTabNavi}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
