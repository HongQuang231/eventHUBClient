//import liraries
import { Image, Text, View } from 'native-base';
import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper'
import { dataSwiper } from '../../constants/data';
import { FontFamily, appColors, appInfo } from '../../global/styles';
import { scale } from '../../utlis/func';
// create a component
const SwipperScreen = (props: any) => {
  const { navigation } = props;
  const [number, setNumber] = useState<number>(0)

  const handleNumChange = useCallback((num: number) => {
    setNumber(num);
  }, [number])

  const handlePrevious = useCallback(() => {
    if (number === 0) return;
    setNumber(prev => --prev);
  }, [number])

  const handleNext = useCallback(() => {
    if (number === dataSwiper.length - 1) {
      navigation.replace('login');
      return;
    };
    setNumber(prev => ++prev);
  }, [number])
  return (
    <View style={styles.container}>
      <Swiper
        style={{}}
        loop={false}
        activeDotColor="#fff"
        dotColor={appColors.gray}
        index={number}
        onIndexChanged={num => handleNumChange(num)}
      >
        {dataSwiper.map(swiper => (
          <Image key={swiper.title} style={styles.containerImage} alt='' source={swiper.image} resizeMode="cover" />
        ))}
      </Swiper>
      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 20
      }}>
        <TouchableWithoutFeedback onPress={handlePrevious} disabled={number === 0}>
          <Text style={[styles.text, {
            opacity: number === 0 ? 0.5 : 1,
          }]}>Prev</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleNext}>
          <Text style={[styles.text, {

          }]}>Next</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    flex: 1,
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'cover',
  },
  text: {
    fontSize: scale(18),
    fontWeight: "500",
    fontFamily: FontFamily.semiBold,
    color: appColors.white
  }
});

//make this component available to the app
export default SwipperScreen;
