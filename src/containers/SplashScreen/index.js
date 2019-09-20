import React from 'react';
import { Image, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import Images from '~/Theme/Images';
import Colors from '~/Theme/Colors';

const SplashScreen = () => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: Colors.defaultBackground }}
  >
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.imageLogo} source={Images.logo} resizeMode="cover" />
      </View>
    </View>
  </SafeAreaView>
);

export default SplashScreen;
