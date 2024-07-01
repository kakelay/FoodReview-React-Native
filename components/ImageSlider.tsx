import React, {useState} from 'react';
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

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
  const {width} = Dimensions.get('window');
  const height = width * 0.5;

  const [active, setActive] = useState<number>(0);

  const onScrollChange = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={{margin: 10}}>
      <ScrollView
        pagingEnabled
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'center',
        }}
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{width, justifyContent: 'center', alignItems: 'center'}}
            >
            <Image
              source={{uri: image}}
              style={{
                width: width,
                height,
                resizeMode: 'cover',
                borderRadius: 8,
              }}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={index === active ? styles.activeDot : styles.dot}>
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
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#23e418',
    fontSize: 50,
  },
});

export default ImageSlider;
