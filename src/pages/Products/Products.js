import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {REACT_APP_API_URL} from '@env';
import ProductCard from '../../componets/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../componets/Loading';
import Error from '../../componets/Error';
import SearchBar from '../../componets/SearchBar';
import {styles} from './Products.styles';

function Products({navigation}) {
  const {loading, fetchData, error} = useFetch(REACT_APP_API_URL);
  const [searchArea, setSearchArea] = useState('');
  const dispatch = useDispatch();

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', id);
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const filtred = fetchData.filter(item => {
    let searchText = searchArea.toLocaleLowerCase();
    let itemTitle = item.title.toLocaleLowerCase();
    return itemTitle.indexOf(searchText) > -1;
  });

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar setSearchArea={setSearchArea} />
      <Button
        title="Logout"
        onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}
      />
      <FlatList
        data={filtred}
        renderItem={renderProduct}
        style={styles.flatList}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </SafeAreaView>
  );
}

export default Products;
