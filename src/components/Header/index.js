import {
  Body, Button, Header as NativeHeader, Icon, Left, Right, Title,
} from 'native-base';
import React from 'react';
import NavigationService from '~/services/NavigationService';

const Header = (props) => {
  const { title, icon } = props;
  const handleGoBack = () => {
    alert('goback');
    NavigationService.goBack();
  };

  const handleOnPress = () => {
    alert('favorite');
    props.onPress();
  };

  return (
    <NativeHeader>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" onPress={handleGoBack} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button transparent onPress={handleOnPress}>
          <Icon name={icon} />
        </Button>
      </Right>
    </NativeHeader>
  );
};

export default Header;
