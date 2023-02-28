import React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';

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
          <TextInput
            style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Plese enter your email"
            placeholderTextColor={'white'}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Password</Text>
            {errors.password && touched.password ? (
              <Text style={styles.alertText}>{errors.password}</Text>
            ) : null}
          </View>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Plese enter your password"
            placeholderTextColor={'white'}
          />

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
