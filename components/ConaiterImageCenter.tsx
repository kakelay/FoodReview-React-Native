import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface ContainerImageCenterProps {
  backgroundColor?: string;
}

const ContainerImageCenter: React.FC<ContainerImageCenterProps> = () => {
  const locationSvg = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/ad.svg';
 

  return (
    <View style={styles.appBarContainer}>
      <View style={styles.appBarActions}>
        <SvgUri uri={locationSvg} width={24} height={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBarContainer: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 16,
    backgroundColor: '#00A753',
  },
  appBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ContainerImageCenter;