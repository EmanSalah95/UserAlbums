import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Item from './Item';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Album = () => {
  const [images, setImages] = useState([]);

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setImages(response.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  });
  return (
    <SafeAreaView style={styles.container}>
      {images.length > 0 ? 
        <FlatList
          data={images}
          numColumns={2}
          renderItem={item => <Item item={item} />}
          keyExtractor={() => Math.random()}
        />
      :<ActivityIndicator size="large" color="#7a42f4" />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Album;
