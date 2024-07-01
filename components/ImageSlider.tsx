import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const { width } = Dimensions.get('window');
  const height = width * 0.7;

  const [active, setActive] = useState<number>(0);

  const onScrollChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}>
        {images.map((image: string, index: number) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height, resizeMode: 'cover' }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, k: number) => (
          <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#ff5900',
    fontSize: 50,
  },
});

export default ImageSlider;
