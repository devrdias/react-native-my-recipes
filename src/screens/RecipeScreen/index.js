import React, {
  Fragment, useEffect, useRef, useState,
} from 'react';
import {
  Dimensions, Image, ScrollView, Text, TouchableHighlight, View, SafeAreaView,
  StatusBar,
} from 'react-native';
import { Badge, CheckBox } from 'react-native-elements';
import ReadMore from 'react-native-read-more-text';
import HTML from 'react-native-render-html';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '~/services/NavigationService';
import Colors from '~/Theme/Colors';
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


  const renderTitle = () => (
    <View>
      <Text style={styles.infoRecipeName}>{item.title}</Text>
      <Text note style={styles.creditsText}>
        by {item.creditsText}
      </Text>
    </View>
  );

  const renderCarousel = () => (
    <View style={styles.carouselContainer}>
      <View style={styles.carousel}>
        <Carousel
          layout="default"
          ref={carouselEl}
          data={item && item.imageUrls && Object.values(item.imageUrls)}
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
          dotsLength={item && item.imageUrls && item.imageUrls.length}
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

  const renderBadges = () => {
    if (item.diets && item.diets.length > 0) {
      const badges = item.diets.map((d, i) => (
        <TouchableHighlight
          key={d}
          underlayColor="#ffffff00"
          onPress={() => {
            NavigationService.navigate('RecipesList', { category, title });
          }}
        >
          <Badge value={<Text style={styles.category}>{item.diets[i]}</Text>} />
        </TouchableHighlight>
      ));

      return (
        <View style={styles.badgesContainer}>
          {badges}
        </View>
      );
    }
  };


  const renderSummary = () => {
    const handleOnLinkPress = (href, attribs) => {
      console.log('TCL: handleOnLinkPress -> attribs', attribs);
    };
    return (
      <ScrollView style={{ flex: 1 }}>
        <HTML
          containerStyle={{ padding: 15, marginHorizontal: 9 }}
          html={item.summary}
          onLinkPress={handleOnLinkPress}
          imagesMaxWidth={Dimensions.get('window').width}
        />
      </ScrollView>

    );
  };

  const renderViewIngredients = () => {
    const { extendedIngredients = [] } = item;
    return (
      <View style={styles.ingredientsContainer}>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingBottom: 5,
        }}
        >
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: Colors.darkgray,
          }}
          >
          Ingredients ({extendedIngredients.length})
          </Text>
        </View>
        {Object.keys(extendedIngredients).map(key => (
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                containerStyle={{ margin: 0, padding: 0 }}
                checkedColor={Colors.red}
                uncheckedColor={Colors.lightgray}
                checked
                onPress={() => alert('add to cart')}
              />
              <Text>{extendedIngredients[key].name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Text>{extendedIngredients[key].amount} {extendedIngredients[key].unit}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  const renderRecipeInstructions = () => {
    const renderTruncatedFooter = handlePress => (
      <Text
        style={{
          color: Colors.headerTintColor,
          marginTop: 5,
        }}
        onPress={handlePress}
      >
          Read more
      </Text>
    );

    const renderRevealedFooter = handlePress => (
      <Text
        style={{
          color: Colors.headerTintColor,
          marginTop: 5,
        }}
        onPress={handlePress}
      >
          Show less
      </Text>
    );

    const handleOnReady = () => {
      console.log('ReadMore onReady');
    };

    return (
      <View style={styles.infoContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: Colors.lightgray,
          paddingBottom: 10,
        }}
        >
          <Text style={{
            flex: 1,
            fontSize: 16,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}
          >
        Instructions
          </Text>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <ReadMore
            numberOfLines={15}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
            onReady={handleOnReady}
          >
            <Text style={styles.infoDescriptionRecipe}>
              {item.instructions}
            </Text>
          </ReadMore>
        </View>
      </View>


    );
  };

  const renderAnalyzedInstructions = () => (
    <View />
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

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.red }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.red }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.container}>
          {renderCarousel()}
          <View style={{
            flex: 1,
            marginVertical: 20,
            marginHorizontal: 10,
            paddingHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ color: Colors.red, paddingBottom: 2 }} name="clock" size={23} />
              <Text style={styles.iconLabels}>Cook Time</Text>
              <Text style={styles.iconLabelsRow2}>{item.readyInMinutes} min</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ color: Colors.red, paddingBottom: 2 }} name="people" size={23} />
              <Text style={styles.iconLabels}>Servings </Text>
              <Text style={styles.iconLabelsRow2}>{item.servings} </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ color: Colors.red, paddingBottom: 2 }} name="fire" size={23} />
              <Text style={styles.iconLabels}>Calories</Text>
              <Text style={styles.iconLabelsRow2}>{item.calories} {item.calories >= 1000 ? 'cal' : 'kcal'}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          {renderTitle()}
          {renderSummary()}
          <View style={styles.separator} />
          {renderViewIngredients()}

          {/* <View style={styles.infoRecipeContainer}>
        {renderBadges()}
      </View> */}
          {/* {renderRecipeInstructions()} */}
          {/* {renderAnalyzedInstructions()} */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

RecipeScreen.navigationOptions = () => ({
  header: null,
});

export default RecipeScreen;
