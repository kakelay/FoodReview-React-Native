import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
  const {width} = Dimensions.get('window');
  const height = width * 0.4;

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
    <View style={{marginVertical: 8}}>
      <ScrollView
        pagingEnabled
        horizontal
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{width}}
        snapToAlignment="center"
        decelerationRate="fast">
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
            }}>
            <Image
              source={{uri: image}}
              style={{
                width: width * 0.9 + 30,
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
          <View
            key={index}
            style={index === active ? styles.activeDot : styles.dot}
          />
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
    backgroundColor:'#666475',
    paddingHorizontal:8,
    paddingVertical:8,
    borderRadius:16
  },
  dot: {
    width: 20,
    height: 8,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  activeDot: {
    width: 25,
    height: 8,
    backgroundColor: '#0A4B78',
    borderRadius: 8,
    marginHorizontal: 4,
  },
});

export default ImageSlider;
