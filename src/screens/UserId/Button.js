import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {wp, hp} from '../../ui/responsiveDimensions';

const Button = ({onPress}) => {
  return (
    <Pressable 
      style={ ({pressed})=>[styles.button , {backgroundColor:pressed ? 'rgba(123,67,244,0.5)' : "#7a42f4"}]}
      onPress={onPress}>
      <Text style={styles.text}>submit</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: wp(2),
    height: hp(6),
    width: wp(65),
    alignItems:"center",
    justifyContent:'center',
    borderRadius:wp(3),
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:wp(4)
  }
});

export default Button;
