import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import Row from './Row';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Albums = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={() => <Row onPress={()=>navigation.push('Album')} />}
        keyExtractor={() => Math.random()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Albums;
