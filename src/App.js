import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Store',
            headerStyle: {
              backgroundColor: '#4E6E81',
            },
            headerTitleStyle: {
              color: '#DC8449',
            },
            headerTitleAlign: 'center',
            statusBarColor: '#4E6E81',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Product Detail',
            headerStyle: {
              backgroundColor: '#4E6E81',
            },
            headerTitleStyle: {
              color: '#DC8449',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            statusBarColor: '#4E6E81',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
