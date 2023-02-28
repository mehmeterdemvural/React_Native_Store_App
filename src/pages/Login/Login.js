import React from 'react';
import {View, TextInput, Text, SafeAreaView} from 'react-native';
import {styles} from './Login.styles';
import Lottie from 'lottie-react-native';

import Input from '../../componets/Input';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Lottie source={require('../../assets/login2.json')} autoPlay loop />
      </View>
      <View style={styles.bodyContainer}>
        <Input />
      </View>
    </SafeAreaView>
  );
}

export default Login;
