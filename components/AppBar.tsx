import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SizedBox from './SizedBox';
 

function AppBar() {
  return (
    <View style={styles.appBarContainer}>
      <Text>
        <View style={styles.appBarActions}>
          <Text style={styles.appBarTitle}>location</Text>
          <SizedBox width={8} /> 
          <Text style={styles.appBarTitle}>បុរីពិភពថ្មីចំការដូង</Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    backgroundColor: '#0A4B78',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  appBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppBar;