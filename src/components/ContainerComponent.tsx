//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, StyleProp, ScrollView, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { appColors } from '../global/styles';
import { Text, View } from 'native-base';
import { ArrowLeft } from 'iconsax-react-native';
import { scale } from '../utlis/func';

interface IContainer {
  isScrollable?: boolean;
  children: React.ReactNode;
  style?: StyleProp<any>;
  title?: string;
  isImageBackground?: boolean;
  back?: boolean;
}
// create a component
const ContainerComponent = (props: IContainer) => {
  const { isScrollable, children, style, isImageBackground, back, title } = props;
  const navigation: any = useNavigation();

  const headerComponent = () => {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {(title || back) && (
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 48,
              minHeight: 48,
              justifyContent: 'flex-start',
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginRight: 12 }}>
                <ArrowLeft size={scale(24)} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title ? (
              <Text style={[styles.text]}>{title}</Text>
            ) : (
              <></>
            )}
          </View>
        )}
        {returnContainer}
      </View>
    );
  };
  const returnContainer = isScrollable ? (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{ flex: 1 }}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require('../../assets/images/splash-img.png')}
      style={{ flex: 1 }}
      imageStyle={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[styles.container]}>
      {headerComponent()}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: appColors.text,
    fontSize: scale(16),
    fontWeight: "400",
  }
});

//make this component available to the app
export default ContainerComponent;
