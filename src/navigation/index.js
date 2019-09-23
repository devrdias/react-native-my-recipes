import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import DrawerContainer from '~/components/DrawerContainer';
import Loading from '~/components/Loading';
import HomeScreen from '~/screens/Home';
import SplashScreen from '~/containers/SplashScreen';
import { startup } from '~/redux/actions/startup.actions';
import NavigationService from '~/services/NavigationService';
import CategoriesScreen from '~/screens/Categories';
import SearchScreen from '~/screens/Search';
import RecipeScreen from '~/screens/RecipeScreen';
import RecipeDetailScreen from '~/screens/RecipeDetailScreen';

const MainStack = createStackNavigator(
  {
    SplashScreen,
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Search: SearchScreen,
    Recipe: RecipeScreen,
    RecipeDetail: RecipeDetailScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    // headerMode: 'none',
    defaultNavigationOptions: () => ({
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'FallingSkyCond',
      },
    }),
  },
);

const DrawerStack = createDrawerNavigator(
  { Main: MainStack },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  },
);

const AppNavigation = createAppContainer(DrawerStack);

const AppContainer = () => {
  const { loading } = useSelector(state => state.api);
  const dispatch = useDispatch();

  // dispatch startup application flow
  useEffect(() => {
    dispatch(startup());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Loading visible={loading} animation="fade" />
      <AppNavigation
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default AppContainer;
