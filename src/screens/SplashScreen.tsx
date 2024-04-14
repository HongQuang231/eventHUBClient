//import liraries
import { Image, Spinner, Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

// create a component
const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/splash-img.png")}
      style={styles.container}
    >
      <View>
        <Image resizeMode="center" alt='logo' source={require("../../assets/images/logo.png")} />
      </View>
      <Spinner color="cyan.500" />
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default SplashScreen;
