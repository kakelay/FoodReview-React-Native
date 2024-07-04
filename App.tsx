import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppBar from './components/AppBar';
import SizedBox from './components/SizedBox';
import ContainerImageCenter from './components/ContainerImageCenter';
import ImageSlider from './components/ImageSlider';
import ImageTextRowWidget from './components/ImageTextRow';
import ImageDecoration from './components/ImageDecoration';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffff',
  };
  const images = [
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppBar title1="location" title2="បុរីពិភពថ្មីចំការដូង" />
      <ContainerImageCenter />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ImageSlider images={images} />
        <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
          <ImageTextRowWidget />
        </View>
        <ImageDecoration />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   scrollView: {
    backgroundColor: Colors.lighter,
   }

});

export default App;
