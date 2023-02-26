import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';

import {styles} from './Products.styles';
import {REACT_APP_API_URL} from '@env';

function Products() {
  const renderProduct = ({item}) => null;

  return (
    <SafeAreaView>
      <FlatList data={null} renderItem={renderProduct} />
    </SafeAreaView>
  );
}

export default Products;
