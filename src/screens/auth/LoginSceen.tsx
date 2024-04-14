//import liraries
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import ContainerComponent from '../../components/ContainerComponent';
import { Checkbox, Image, Text, View } from 'native-base';
import { FontFamily, appColors } from '../../global/styles';
import { scale } from '../../utlis/func';
import InputComponent from '../../components/InputComponent';
import { ArrowRight, Facebook, Google, Lock1, Sms } from 'iconsax-react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { globalStyles } from '../../global/common';

// create a component
const LoginScreen = (props: any) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image resizeMode="contain" alt='text' source={require("../../../assets/images/text-logo.png")} />
      </View>
      <ContainerComponent
        isScrollable={true}
      >
        <View style={{ flex: 1, paddingHorizontal: 29, marginTop: 30, marginBottom: 10 }}>
          <Text style={[styles.textTitle, {
            lineHeight: scale(30),
            marginBottom: 21
          }]}>Sign in</Text>
          <InputComponent
            value={email}
            onChange={setEmail}
            placeholder='abc@email.com'
            affix={<Sms
              size="22"
              color="#807a7a"
            />}
            isRequired
            type="email"
          />

          <InputComponent
            value={password}
            onChange={setPassword}
            placeholder='Your password'
            affix={<Lock1
              size="22"
              color="#807a7a"
            />}
            isPassword={true}
            isRequired
            type="password"
          />

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Checkbox onChange={value => setRememberMe(value)} isChecked={rememberMe} colorScheme={'blue'} value={''}>
              <Text style={styles.text}>Remember Me</Text>
            </Checkbox>
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 36, marginBottom: 20 }}>
            <ButtonComponent
              disable={isDisable}
              type="primary"
              text={'Sign in'}
              icon={<ArrowRight
                color={appColors.white}
                variant="Bold"
                style={{ position: 'absolute', right: 20, borderRadius: 10 }}
              />}
              iconFlex="right"
            />
          </View>
          <Text style={[globalStyles.text, {
            textAlign: "center",
            color: "#9D9898",
            fontWeight: "500",
            fontSize: scale(16),
            marginBottom: 5,
            fontFamily: FontFamily.medium,
          }]}>OR</Text>
          <ButtonComponent
            disable={isDisable}
            type="primary"
            color='#fff'
            text={'Login with Google'}
            textColor={appColors.text}
            icon={<Google
              color={appColors.primary}
              variant="Bold"
              style={{ position: 'absolute', left: 20, borderRadius: 10 }}
            />}
            iconFlex="left"
          />
          <ButtonComponent
            disable={isDisable}
            color='#fff'
            type="primary"
            text={'Login with Facebook'}
            textColor={appColors.text}
            icon={<Facebook
              color={appColors.primary}
              variant="Bold"
              style={{ position: 'absolute', left: 20, borderRadius: 10 }}
            />}
            iconFlex="left"
          />

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 10 }}>
            <Text style={[globalStyles.text]}>Don’t have an account?</Text>
            <ButtonComponent
              type="link"
              text={'Sign up'}
              textColor={'#5669FF'}
              onPress={() => navigation.navigate('signUp')}
              icon={<Facebook
                color={appColors.primary}
                variant="Bold"
                style={{ position: 'absolute', left: 20, borderRadius: 10 }}
              />}
              iconFlex="left"
            />
          </View>
        </View>
      </ContainerComponent>
    </SafeAreaView >
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textTitle: {
    color: appColors.text,
    fontSize: scale(24),
    fontWeight: "400",
    fontFamily: FontFamily.medium,
  },
  text: {
    color: appColors.text,
    fontSize: scale(14),
    fontWeight: "400",
    fontFamily: FontFamily.regular,
  }
});

//make this component available to the app
export default LoginScreen;
