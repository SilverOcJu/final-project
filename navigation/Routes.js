import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Componentes de las pantallas
import LoginScreen from './../components/LoginScreen';
import HomePage from './../components/HomePage';
import ShoppingCart from './../components/ShoppingCart';
import Profile from './../components/Profile';
import RegistrationPage from './../components/RegistrationPage';
import TabNavigator from './TabNavigator';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
