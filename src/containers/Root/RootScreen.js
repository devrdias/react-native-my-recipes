import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '~/components/Loading';
import HomeScreen from '~/containers/Home';
import SearchTabNavigator from '~/containers/SearchTabNavigator';
import SplashScreen from '~/containers/SplashScreen';
import { startup } from '~/redux/actions/startupActions';
import NavigationService from '~/services/NavigationService';
import Colors from '~/Theme/Colors';

const configureStack = {
  // initialRouteName: 'SplashScreen',
  initialRouteName: 'SearchTabNavigator',
  headerMode: 'none',
  navigationOptions: {
    translucent: 'true',
    headerStyle: {
      backgroundColor: Colors.defaultBackground,
      elevation: 0,
      paddingTop: 40,
    },
    headerTitleStyle: {
      textAlign: 'center',
      fontFamily: 'Geomanist-Medium',
      alignSelf: 'center',
    },
    headerTintColor: Colors.headerTintColor,
  },
};

/**
 * Root navigation
 */
const RootNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen: { screen: HomeScreen },
    SearchTabNavigator: { screen: SearchTabNavigator },
  },
  configureStack,
);

/**
 * Configure App Container - for react-navigation 3+
 */
const AppContainer = createAppContainer(RootNavigator);

/**
 * Define main RootScreen component
 */
const RootScreen = () => {
  const { loading } = useSelector(state => state.api);
  const dispatch = useDispatch();

  // dispatch startup application flow
  useEffect(() => {
    dispatch(startup());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Loading visible={loading} animation="fade" />
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default RootScreen;
