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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker :'#ffff',

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <AppBar />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>UserName</Text>
          <SizedBox height={8} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            keyboardType='ascii-capable'
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
        </View>
      </ScrollView>
    </SafeAreaView>
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
