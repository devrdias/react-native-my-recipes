import React from 'react';
import {
  Text, View, ScrollView, TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { diet, intolerances, type } from '~/services/RecipeFilters/api.filters';
import styles from './styles';
import { fetchRecipeByCategory } from '~/redux/actions/recipe.actions';
import NavigationService from '~/services/NavigationService';

// TODO: implement SectionList
const Categories = () => {
  const typeSorted = Object.values(type).sort();
  const intolerancesSorted = Object.values(intolerances).sort();
  const dietSorted = Object.values(diet).sort();
  const dispatch = useDispatch();


  const handleOnPressCategory = (query) => {
    dispatch(fetchRecipeByCategory(query));
    NavigationService.navigate('Search', {
      title: query.category === 'intolerances' ? `${query.filter} free` : query.filter,
    });
  };

  const renderCategories = (items, category) => (
    Object.values(items).map((l, i) => (
      <TouchableOpacity key={i} onPress={() => handleOnPressCategory({ category, filter: l })}>
        <ListItem
          // key={i}
          title={category === 'intolerances' ? `${l} free` : l}
        />
      </TouchableOpacity>
    ))
  );

  return (
    <ScrollView>
      <View style={styles.header}><Text style={styles.headerText}>Types</Text></View>
      { renderCategories(typeSorted, 'type') }
      <View style={styles.header}><Text style={styles.headerText}>Diets</Text></View>
      { renderCategories(dietSorted, 'diet') }
      <View style={styles.header}><Text style={styles.headerText}>Intolerances</Text></View>
      { renderCategories(intolerancesSorted, 'intolerances') }
    </ScrollView>
  );
};

Categories.navigationOptions = () => ({
  title: 'Categories',
});

export default Categories;
