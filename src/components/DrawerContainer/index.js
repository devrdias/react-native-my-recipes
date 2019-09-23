import React from 'react';
import { View } from 'react-native';
import NavigationService from '~/services/NavigationService';
import Images from '~/Theme/Images';
import DrawerItem from '../DrawerItem';
import styles from './styles';


const DrawerContainer = () => {
  const handleOnPress = (item) => {
    NavigationService.navigate(item, { title: item });
    NavigationService.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DrawerItem
          title="HOME"
          imageSource={Images.home}
          onPress={() => handleOnPress('Home')}
        />
        <DrawerItem
          title="CATEGORIES"
          imageSource={Images.category}
          onPress={() => handleOnPress('Categories')}
        />
        <DrawerItem
          title="SEARCH"
          imageSource={Images.search}
          onPress={() => handleOnPress('Search')}
        />
      </View>
    </View>
  );
};

export default DrawerContainer;
