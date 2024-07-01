import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const ImageTextRowWidget = () => {
  return (
    <View style={styles.containerRow}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.wired.com/photos/5926b80bcefba457b079aed8/master/w_2560%2Cc_limit/google-translate-logo-s.png',
        }}
      />
      <View style={styles.containerColumn}>
        <Text style={styles.text}>ROSE Coffee & Tea</Text>
        <Text style={styles.text}>Icon Star</Text>
        <Text style={styles.text}>Save QR Code</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  containerColumn: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems:'flex-start',
    aspectRatio:   1, 
    marginLeft: 8,
    paddingVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
});

export default ImageTextRowWidget;
