import {
  Header, Icon, Input, Item, Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '~/Theme/Colors';


const SearchHeader = (props) => {
  const { onChangeText, onRecipeSearch } = props;
  const [focus, setFocus] = useState(false);

  return (
    <Header
      style={{ height: 80 }}
      searchBar
      rounded
    >
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder={focus ? null : 'Gluten free brownies without sugar'}
          placeholderTextColor={Colors.darkGrey}
          underlineColorAndroid={Colors.transparent}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          returnKeyType="search"
          onChangeText={onChangeText}
          onSubmitEditing={onRecipeSearch}
        />
      </Item>
    </Header>
  );
};

export default SearchHeader;
