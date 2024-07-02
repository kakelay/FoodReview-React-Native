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
        <Text style={styles.textTitle}>ROSE Coffee & Tea</Text>
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
    
    backgroundColor:'#ff4d00f7f'
  },
  containerColumn: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor:'#ff0000'
  },
  text: {
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
  textTitle: {
    flexShrink: 1,
    alignSelf: 'flex-start',
    fontWeight:'700',
    fontSize: 16,


  },
});

export default ImageTextRowWidget;
