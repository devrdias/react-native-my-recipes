import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import FoodList from '~/components/FoodList';
import MenuImage from '~/components/MenuImage';
import NavigationService from '~/services/NavigationService';

const Home = () => {
  const { favorites, loading } = useSelector(state => state.recipes);
  const dataSource = Object.values(favorites);

  return (
    <Fragment>
      <FoodList
        data={dataSource}
        loading={loading}
      />
    </Fragment>
  );
};

Home.navigationOptions = () => ({
  title: 'Home',
  headerLeft: (
    <MenuImage
      onPress={() => {
        NavigationService.openDrawer();
      }}
    />
  ),
});

export default Home;
