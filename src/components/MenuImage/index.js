import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Images from '~/Theme/Images';


const MenuImage = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.image} source={Images.menu} />
  </TouchableOpacity>
);

MenuImage.propTypes = {
  onPress: PropTypes.func.isRequired,
};


export default MenuImage;
