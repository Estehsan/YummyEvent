import {StyleSheet, Text, View, TextInput, useColorScheme} from 'react-native';
import React from 'react';
import {Paragraph, Title} from 'react-native-paper';
import {theme} from '../../theme';
import H3 from './H3';

const TextInputField = ({placeholder, title, darkmode}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <H3 textTransform={'uppercase'} color={theme.colors.Grey}>
        {title}
      </H3>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  input: {
    width: '100%',
    borderRadius: 20,
    fontFamily: 'BRFirma-SemiBold',
    fontSize: 18,

    borderColor: '#888',
    backgroundColor: theme.colors.blue1,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 18.5,
  },
});
