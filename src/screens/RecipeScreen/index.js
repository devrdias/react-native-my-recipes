import React, {
  Fragment, useEffect, useRef, useState,
} from 'react';
import {
  Dimensions, Image, ScrollView, Text, TouchableHighlight, View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '~/services/NavigationService';
import Images from '~/Theme/Images';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

const RecipeScreen = ({ navigation }) => {
  const { id } = navigation.state.params;
  const item = useSelector(state => state.recipes.data[id]);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselEl = useRef(null);
  const paginationEl = useRef(null);
  const dispatch = useDispatch();
  const { category, title } = '';

  useEffect(() => {
  }, []);


  const renderCarousel = () => (
    <View style={styles.carouselContainer}>
      <View style={styles.carousel}>
        <Carousel
          layout="default"
          ref={carouselEl}
          data={Object.values(item.imageUrls)}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          onSnapToItem={handleOnSnapToItem}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          firstItem={0}
          loop={false}
          autoplay
          autoplayDelay={5000}
          autoplayInterval={3000}
        />
        <Pagination
          dotsLength={item.imageUrls.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotColor="rgba(255, 255, 255, 0.92)"
          dotStyle={styles.paginationDot}
          inactiveDotColor="white"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={paginationEl}
          tappableDots={!!paginationEl}
        />
      </View>
    </View>
  );

  const renderCredits = () => (
    <View style={styles.creditsContainer}>
      <Text style={styles.creditsText}>
          {item.creditsText}
        </Text>
    </View>
  );
  const handleOnSnapToItem = (index) => {
    setActiveSlide(index);
  };

  const renderItem = image => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image.item }} />
      </View>
    </TouchableHighlight>
  );

  const handleDetailIngredients = () => {
    NavigationService.navigate('RecipeDetail');
  };

  debugger;
  return (
    <ScrollView style={styles.container}>
      {renderCarousel()}
      {renderCredits()}

      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() => NavigationService.navigate('RecipesList', { category, title })}
          >
            <Text style={styles.category}>{item.categoryId}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image style={styles.infoPhoto} source={Images.time} />
          <Text style={styles.infoRecipe}>{item.readyInMinutes} minutes </Text>
        </View>

        <View style={styles.infoContainer}>
          <TouchableHighlight
            underlayColor="#ffffff00"
            onPress={handleDetailIngredients}
          >
            <View style={styles.container}>
              <Text style={styles.text}>View Ingredients</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeScreen;
