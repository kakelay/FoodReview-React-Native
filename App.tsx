import React from 'react';
import {
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

        <View style={styles.sectionContainer}>
          <SizedBox height={20} />
          <Text style={styles.sectionTitle}>UserName</Text>
          <SizedBox height={8} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            keyboardType="ascii-capable"
          />
          <SizedBox height={8} />
          <Text style={styles.sectionTitle}>Gmail</Text>
          <SizedBox height={8} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <SizedBox height={8} />
          <Text style={styles.sectionTitle}>PhoneNumber</Text>
          <SizedBox height={8} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
          <SizedBox height={8} />
          <Text style={styles.sectionTitle}>Address</Text>
          <SizedBox height={8} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  textInput: {
    height: 50,
    borderColor: '#CCCCCC',
    backgroundColor: '#daeaf5',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});

export default App;
