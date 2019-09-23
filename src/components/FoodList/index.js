import React, { Fragment } from 'react';
import {
  FlatList, Image, Text, TouchableHighlight, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles';
import Colors from '~/Theme/Colors';
import NavigationService from '~/services/NavigationService';
import { fetchRecipeDetail } from '~/redux/actions/recipe.actions';


const FoodList = ({ data, loading }) => {
  const dispatch = useDispatch();
  const dataSource = Object.values(data);

  const onPress = (item) => {
    const { id } = item;
    dispatch(fetchRecipeDetail(id));
    NavigationService.navigate('Recipe', { id });
  };

  const renderNoItemsFound = () => (
    <View style={styles.noItemFound}>
      <Text style={{ color: Colors.darkGrey }}>No recipe found</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableHighlight underlayColor="#ffffff00" onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableHighlight>
  );
  const keyExtractor = ({ id }) => id.toString();

  if (loading) {
    return null;
  }
  if (dataSource.length === 0) {
    return renderNoItemsFound();
  }

  return (
    <Fragment>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Fragment>
  );
};

FoodList.defaultProps = {
  data: [],
  loading: false,
};

FoodList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default FoodList;
