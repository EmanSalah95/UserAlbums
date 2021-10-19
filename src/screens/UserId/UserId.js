import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {hp, wp} from '../../ui/responsiveDimensions';
import Button from './Button';

const UserId = ({navigation}) => {
  const userIds = ['15', '18', '20', '21'];
  const [id, setId] = useState(0);
  const [error, setError] = useState('');

  const pressHandler = () => {
    userIds.includes(id)
      ? navigation.push('Albums')
      : setError(" user doesn't exist");
  };

  const onChangeTExt = v => {
    isNaN(v) ? setError(' numbers only !') : setError('');
    setId(v);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View >
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TextInput
            placeholder="enter user id please"
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="number-pad"
            onChangeText={v => onChangeTExt(v)}
            onSubmitEditing={pressHandler}
          />
        </View>
        <Button onPress={pressHandler} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: wp(2),
    height: hp(8),
    width: wp(70),
    borderColor: '#7a42f4',
    borderWidth: wp(0.5),
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: wp(2.8),
    position: 'absolute',
    bottom: -wp(1.5),
    left: wp(2),
  },
});

export default UserId;
