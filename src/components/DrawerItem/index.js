import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Colors from '~/Theme/Colors';


const DrawerItem = ({ title, imageSource, onPress }) => (
  <TouchableHighlight
    style={styles.container}
    onPress={onPress}
    underlayColor={Colors.underlayColor}
  >
    <View style={styles.content}>
      <Image source={imageSource} style={styles.buttonIcon} />
      <Text style={styles.textButton}>{title}</Text>
    </View>
  </TouchableHighlight>
);


DrawerItem.defaultProps = {
  title: '',
  imageSource: '',
  onPress: () => undefined,
};
DrawerItem.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.number,
  onPress: PropTypes.func,
};

export default DrawerItem;
