import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {wp} from '../../ui/responsiveDimensions';

const Item = ({item}) => {
  return <Image style={styles.image} source={{uri: item.item.url}} />;
};

const styles = StyleSheet.create({
  image: {
    width: wp(46),
    height: wp(46),
    margin: wp(2),
    borderRadius: wp(4),
  },
});

export default Item;
