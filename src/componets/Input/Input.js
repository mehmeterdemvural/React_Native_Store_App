import React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {loginShema} from './loginValidation';
import {styles} from './Input.styles';

function Input() {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={loginShema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Email</Text>
            {errors.email && touched.email ? (
              <Text style={styles.alertText}>{errors.email}</Text>
            ) : null}
          </View>
          <View style={styles.textInputContainer}>
            <Icon name={'account'} size={20} color={'#DC8449'} style={styles.icon}/>
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Plese enter your email"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Password</Text>
            {errors.password && touched.password ? (
              <Text style={styles.alertText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.textInputContainer}>
            <Icon name={'key'} size={20} color={'#DC8449'} style={styles.icon}/>
            <TextInput
              style={styles.textInput}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Plese enter your password"
              placeholderTextColor={'white'}
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

export default Input;
