/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from "react-redux"
import { store } from './src/store';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { isLogin } from './src/constants/variable';
import MainNavigation from './src/navigation/MainNavigation';
import { NativeBaseProvider, View } from "native-base"
import SplashScreen from './src/screens/SplashScreen';
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigation from './src/navigation/AuthNavigation';


function App(): React.JSX.Element {
  const [isLoginState, setIsloginState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      AsyncStorage.getItem(isLogin).then((token) => {
        if (token) {
          setIsloginState(true);
        } else {
          setIsloginState(false);
        }
      }).finally(() => setIsLoading(false));
    }, 1000)

  }, [])
  if (isLoading) {
    return (
      <NativeBaseProvider>
        <SplashScreen />
      </NativeBaseProvider>
    )
  }

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          {isLoginState ? (
            <MainNavigation />
          ) : (
            <AuthNavigation />
          )}
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
