import {
  Content, ListItem, List, Button, Icon, Container,
} from 'native-base';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '~/Theme/Colors';
import Header from '~/components/Header';
import { toggleFavoriteRecipe } from '~/redux/actions/recipe.actions';
import Badge from '~/components/Badge';

// aggregateLikes: 10
// analyzedInstructions: []
// creditsText: "Martha Stewart"
// cuisines: []

// diets: (7) ["gluten free", "dairy free", "paleolithic", "lacto ovo vegetarian", "primal", "whole 30", "vegan"]
// dishTypes: ["side dish"]

//  <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
// extendedIngredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

// gaps: "no"
// image: "https://spoonacular.com/recipeImages/12009-556x370.jpg"
// imageType: "jpg"
// instructions: null
// occasions: []
// pricePerServing: 93.07
// readyInMinutes: 34
// servings: 6
// spoonacularScore: 95
// spoonacularSourceUrl: "https://spoonacular.com/roasted-parsnip-celery-heart-and-apple-salad-12009"
// cheap: false
// sustainable: false
// ketogenic: false
// lowFodmap: false
// vegan: true
// vegetarian: true
// veryHealthy: true
// veryPopular: false
// dairyFree: true
// glutenFree: true
// healthScore: 67
// weightWatcherSmartPoints: 7
// whole30: true
// winePairing:
const RecipeDetail = ({ navigation }) => {
  // const { id } = navigation.state.params;
  // const recipe = useSelector(state => state.recipes.data[id]);
  const recipe = useSelector(state => state.recipes.data[12009]);
  const loading = useSelector(state => state.recipes.loading);
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(toggleFavoriteRecipe(recipe.id));
  };


  const renderItem = (item, divider = false) => (
    <ListItem
      itemDivider={divider}
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text>{item}</Text>
      </View>
    </ListItem>
  );

  const renderBadges = () => {
    const {
      cheap, sustainable, ketogenic, lowFodmap,
      vegan, veryHealthy, veryPopular, dairyFree, glutenFree,
    } = recipe;

    return (
      <ListItem style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      >
        <Badge text="cheap" value={cheap} />
        <Badge text="sustainable" value={sustainable} />
        <Badge text="ketogenic" value={ketogenic} />
        <Badge text="low-fodmap" value={lowFodmap} />
        <Badge text="vegan" value={vegan} />
        <Badge text="healthy" value={veryHealthy} />
        <Badge text="popular" value={veryPopular} />
        <Badge text="dairy free" value={dairyFree} />
        <Badge text="gluten free" value={glutenFree} />
      </ListItem>

    );
  };

  const renderHealthScores = () => {
    renderItem(recipe.healthScore);
    renderItem(recipe.weightWatcherSmartPoints);
  };


  if (loading) {
    return null;
  }

  return (
    <Container>
      <Header icon="heart" onPress={handleOnFavorite} />
      <Content>
        <List style={{ backgroundColor: Colors.white }}>

          {renderItem(recipe.title, true)}
          {renderItem(recipe.sourceName)}
          {renderItem(recipe.sourceUrl)}
          {renderItem('Badges', true)}

          {renderBadges()}

          {renderHealthScores()}


        </List>
      </Content>
    </Container>
  );
};


RecipeDetail.navigationOptions = () => ({
  header: null,
});
export default RecipeDetail;
