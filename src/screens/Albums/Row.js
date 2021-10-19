import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import {hp, wp} from '../../ui/responsiveDimensions';

const Row = ({onPress}) => {
  return (
    <>
      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={onPress}
        style={styles.item}>
        <Text style={styles.title}>album name</Text>
      </TouchableHighlight>
      <View style={styles.line} />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: wp(5),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  line: {
    width: wp(95),
    height: hp(0.2),
    marginHorizontal: wp(2.5),
    backgroundColor: '#dddddd',
  },
});

export default Row;
