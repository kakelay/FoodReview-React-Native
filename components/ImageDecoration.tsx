import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const ImageDecoration = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/257427541_5514967605185740_3260772698787590247_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=fXvT7cDYir8Q7kNvgG2i3nu&_nc_ht=scontent.fpnh24-1.fna&oh=00_AYCQrfEXlq1rNpYOGtBUnvmZFJMxZdcP1k9wnNJ0866GUw&oe=66893DA9',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    height: 200,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius:16,
    borderWidth: 2,
    borderColor: '#fff',
    
  },
});

export default ImageDecoration;
