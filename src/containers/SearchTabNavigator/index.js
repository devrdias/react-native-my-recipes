/* eslint-disable default-case */
import { Text } from 'native-base';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from 'react-navigation';
import { FavoritesTab, SearchTab } from './Tabs';


const SearchTabNavigator = createBottomTabNavigator({
  SearchTab: { screen: SearchTab },
  FavoritesTab: { screen: FavoritesTab },

}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let icon;
      switch (routeName) {
        case 'SearchTab':
          icon = <Icon name="food" size={25} color={tintColor} />;
          break;
        case 'FavoritesTab':
          icon = <Icon name="star" size={25} color={tintColor} />;
          break;
      }
      return icon;
    },
    tabBarLabel: ({ focused }) => {
      const { routeName } = navigation.state;
      let label;
      switch (routeName) {
        case 'SearchTab':
          label = <Text>Search</Text>;
          break;
        case 'FavoritesTab':
          label = <Text>Favorites</Text>;
          break;
      }
      // return focused ? label : null;
      return label;
    },
  }),
  lazy: false,
  tabBarOptions: {
    style: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
  },
});

export default SearchTabNavigator;
