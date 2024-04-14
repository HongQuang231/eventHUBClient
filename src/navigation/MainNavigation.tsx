//import liraries
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainScreen from '../screens/MainScreen';

// create a component
const Main = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Main.Navigator
      screenOptions={{}}
    >
      <Main.Screen
        name="main"
        component={MainScreen}
        options={{
          title: 'Home',
        }}
      />
    </Main.Navigator>
  );
};

//make this component available to the app
export default MainNavigation;
