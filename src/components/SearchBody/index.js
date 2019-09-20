import React from 'react';
import { FlatList } from 'react-native';
import ReceiptCard from '~/components/ReceiptCard';

const SearchBody = ({ data }) => {
  const dataSource = Object.values(data);

  const renderItem = ({ item }) => (
    <ReceiptCard
      item={item}
      onPressItem={() => alert(item.title)}
    />
  );
  const keyExtractor = ({ id }) => id.toString();

  return (
    <FlatList data={dataSource} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default SearchBody;
