//import liraries
import React, { Component, useState } from 'react';
import { StyleSheet } from 'react-native';
import ContainerComponent from '../../components/ContainerComponent';
import { Text, View } from 'native-base';
import { globalStyles } from '../../global/common';
import { scale } from '../../utlis/func';
import InputComponent from '../../components/InputComponent';
import { ArrowRight, Lock1, Personalcard, Sms } from 'iconsax-react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { appColors } from '../../global/styles';

// create a component
const SignUpScreen = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [isDisable, setIsDisable] = useState(false);
  return (
    <ContainerComponent
      isScrollable
      back
    >
      <View style={{ paddingHorizontal: 29 }}>
        <Text style={[globalStyles.textTitle, { marginBottom: 23 }]}>Sign up</Text>

        <InputComponent
          value={fullName}
          onChange={setFullName}
          placeholder='Full name'
          allowClear
          affix={<Personalcard
            size="22"
            color="#807a7a"
          />}
        />
        <InputComponent
          value={email}
          onChange={setEmail}
          placeholder='abc@email.com'
          affix={<Sms
            size="22"
            color="#807a7a"
          />}
          allowClear
        />
        <InputComponent
          value={password}
          onChange={setPassword}
          placeholder='Your password'
          isPassword
          affix={<Lock1
            size="22"
            color="#807a7a"
          />}
        />
        <InputComponent
          value={passwordConfirmation}
          onChange={setPasswordConfirmation}
          placeholder='Confirm password'
          isPassword
          affix={<Lock1
            size="22"
            color="#807a7a"
          />}
        />

        <View style={{ marginTop: 36 }}>
          <ButtonComponent
            disable={isDisable}
            type="primary"
            text={'Sign up'}
            icon={<ArrowRight
              color={appColors.white}
              variant="Bold"
              style={{ position: 'absolute', right: 20, borderRadius: 10 }}
            />}
            iconFlex="right"
          />
        </View>
      </View>
    </ContainerComponent>
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
export default SignUpScreen;
