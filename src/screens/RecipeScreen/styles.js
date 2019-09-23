import { StyleSheet, Dimensions } from 'react-native';
import Colors from '~/Theme/Colors';

const { width: viewportWidth } = Dimensions.get('window');

// TODO: install fonts !!!
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  creditsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginRight: 10,
    justifyContent: 'flex-start',
  },
  infoRecipeName: {
    fontSize: 18,
    // fontFamily: 'FallingSky',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'left',
  },
  creditsText: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 15,
    marginTop: 2,
    color: Colors.grey,
    textAlign: 'left',
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgesContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timeAndSizeContainer: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  instructionsContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  recipeInstructions: {
    flex: 1,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    // fontFamily: 'FallingSky',
    marginLeft: 5,
  },
  iconLabels: {
    color: Colors.darkgray,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 2,
  },
  iconLabelsRow2: {
    color: Colors.grey,
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 2,
  },
  category: {
    // fontSize: 14,
    fontWeight: 'bold',
    // fontFamily: 'FallingSky',
    marginHorizontal: 12,
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    // fontFamily: 'FallingSky',
    marginTop: 30,
    margin: 15,
  },

  separator: {
    marginHorizontal: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
