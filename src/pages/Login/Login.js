import React from 'react';
import {View, TextInput, Text, SafeAreaView, Alert} from 'react-native';
import {styles} from './Login.styles';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import Input from '../../componets/Input';
import usePost from '../../hooks/usePost';
import {REACT_APP_AUTH_URL} from '@env';
import Loading from '../../componets/Loading';

function Login({navigation}) {
  const {postData, postLoading, postError, postUser} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    postUser(`${REACT_APP_AUTH_URL}/login`, values);
  }

  if (!postLoading && postError) {
    Alert.alert('Store', 'Something went wrong !');
  } else if (postData) {
    if (postData.status === 'Error') {
      Alert.alert('Store', 'User was not found !');
    } else {
      dispatch({type: 'SET_USER', payload:{user}})
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Lottie source={require('../../assets/login2.json')} autoPlay loop />
      </View>
      <View style={styles.bodyContainer}>
        <Input handleSubmit={handleLogin} loading={postLoading} />
      </View>
    </SafeAreaView>
  );
}

const user = {
  id: 1,
  email: 'John@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  },
  phone: '1-570-236-7033',
};

export default Login;
