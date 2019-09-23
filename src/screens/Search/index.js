import React, { Fragment, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import FoodList from '~/components/FoodList';
import MenuImage from '~/components/MenuImage';
import { fetchSearchRecipe, resetSearchRecipe } from '~/redux/actions/recipe.actions';
import NavigationService from '~/services/NavigationService';
import Colors from '~/Theme/Colors';
import styles from './styles';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { data, loading } = useSelector(state => state.recipes);
  const dataSource = Object.values(data);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setParams({
      handleSearch,
      handleOnChangeText,
      handleOnClear,
      value: search,
    });
  }, [search]);

  const handleOnChangeText = (text) => { setSearch(text); };

  const handleOnClear = () => {
    setSearch('');
    dispatch(resetSearchRecipe());
  };

  const handleSearch = () => {
    Keyboard.dismiss();
    const query = search.toLowerCase();
    dispatch(fetchSearchRecipe(query));
  };

  return (
    <Fragment>
      <FoodList
        data={dataSource}
        loading={loading}
      />
    </Fragment>
  );
};

Search.navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation.state;

  return {
    title: params.title || null,
    headerLeft: (
      <MenuImage onPress={() => NavigationService.openDrawer()} />
    ),
    headerTitle: params.title === 'Search' ? (
      <SearchBar
        searchIcon
        clearIcon
        round
        returnKeyType="search"
        placeholder="Search"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputSearch}
        underlineColorAndroid={Colors.transparent}
        onChangeText={params.handleOnChangeText}
        onClear={params.handleOnClear}
        onSubmitEditing={params.handleSearch}
        value={params.value}
      />
    ) : null,
  };
};

export default Search;
