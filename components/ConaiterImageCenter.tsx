import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import SizedBox from './SizedBox';

interface ContaieImageCenterProps {
  image?: string;
  backgroundColor?: string;
}

const ContainerImageCenter: React.FC<ContaieImageCenterProps> = ({
  image: Image,
}) => {
  return (
    <View style={styles.appBarContainer}>
      <View style={styles.appBarActions}>
        {Image && <Text style={styles.appBarTitle}>{Image}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 0,
  },
  appBarContainer: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 16,
    backgroundColor: '#00A753',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',

  },
  appBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ContainerImageCenter;
