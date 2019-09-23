import { Button, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavigationService from '~/services/NavigationService';
import Images from '~/Theme/Images';
import Colors from '~/Theme/Colors';

const Home = () => {
  const handleOnPress = () => {
    NavigationService.navigate('SearchTabNavigator');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.background} style={styles.backgroundImage} />
        </View>
        <Button block>
          <Text style={styles.buttonText} onPress={handleOnPress}>Search</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: { color: 'white' },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: null,
    width: null,
  },
});

export default Home;
