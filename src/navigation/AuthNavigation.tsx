//import liraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipperScreen from '../screens/auth/SwiperScreen';
import LoginScreen from '../screens/auth/LoginSceen';
import SignUpScreen from '../screens/auth/SignUpScreen';

// create a component
const Auth = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name='swiper' component={SwipperScreen} />
      <Auth.Screen name='login' component={LoginScreen} />
      <Auth.Screen name='signUp' component={SignUpScreen} />
    </Auth.Navigator>
  );
};

//make this component available to the app
export default AuthNavigation;
