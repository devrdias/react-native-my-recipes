import {
  Container, Content, View, Text,
} from 'native-base';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchHeader from '~/components/SearchHeader';
import { fetchSearchRecipe } from '~/redux/actions/recipe.actions';
import Colors from '~/Theme/Colors';
import SearchBody from '~/components/SearchBody';


const SearchTab = (props) => {
  const [searchRecipe, setSearchRecipe] = useState('');
  const { data, loading } = useSelector(state => state.recipes);

  const dispatch = useDispatch();
  const handleOnChange = (search) => {
    setSearchRecipe(search);
    console.log(search);
  };
  const handleOnRecipeSearch = () => {
    Keyboard.dismiss();
    const query = searchRecipe.toLowerCase();
    dispatch(fetchSearchRecipe(query));
  };

  const renderContent = () => {
    const items = Object.keys(data).map(k => data[k]);
    if (!loading) {
      if (items.length > 0) {
        return <SearchBody data={data} />;
      }
      return (
        <View style={{
          flex: 1, height: 20, alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Text style={{ color: Colors.darkgray }}>No items found</Text>
        </View>
      );
    }
  };


  return (
    <Container>
      <SearchHeader
        value={searchRecipe}
        onChangeText={handleOnChange}
        onRecipeSearch={handleOnRecipeSearch}
      />

      <Content>
        {renderContent()}
      </Content>
    </Container>
  );
};

export default SearchTab;
