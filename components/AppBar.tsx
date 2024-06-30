// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
// import SizedBox from './SizedBox';
// const backgroundStyle = {
//   backgroundColor: '#0A4B78',
// };

// function AppBar() {
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
//       <View style={styles.appBarContainer}>
//         <View style={styles.appBarActions}>
//           <Text style={styles.appBarTitle}>location</Text>
//           <SizedBox width={8} />
//           <Text style={styles.appBarTitle}>បុរីពិភពថ្មីចំការដូង</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   appBarContainer: {
//     height: 56,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     flexDirection: 'column',
//     paddingHorizontal: 16,
//   },
//   appBarTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   appBarActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default AppBar;




///  code dynamic



import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SizedBox from './SizedBox';

interface AppBarProps {
  title1?: string;
  title2?: string;
  backgroundColor?: string;
}

const AppBar: React.FC<AppBarProps> = ({ title1, title2, backgroundColor = '#0A4B78' }) => {
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor }]}>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={styles.appBarContainer}>
        <View style={styles.appBarActions}>
          {title1 && <Text style={styles.appBarTitle}>{title1}</Text>}
         <SizedBox width={8}/>
          {title2 && <Text style={styles.appBarTitle}>{title2}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 0,
  },
  appBarContainer: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 16,
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

export default AppBar;
