//import liraries
import { Input } from 'native-base';
import React, { Component, ReactNode, useState } from 'react';
import { View, Text, StyleSheet, KeyboardTypeOptions, TextInput, KeyboardType, TouchableOpacity } from 'react-native';
import { appColors } from '../global/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { isNullOrUndefined, validateEmail, validatePassword, validatePhone } from '../utlis/func';
import { globalStyles } from '../global/common';
interface IInput {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  typeKeyboard?: KeyboardType;
  onEnd?: () => void;
  isRequired?: boolean;
  type?: "email" | "password" | "text" | "phone"
}
// create a component
const InputComponent = (props: IInput) => {
  const [error, setError] = useState<string>('')
  const {
    value,
    onChange,
    affix,
    suffix,
    placeholder,
    isPassword,
    allowClear,
    typeKeyboard,
    onEnd,
    isRequired,
    type = "text"
  } = props;
  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  const handleOnBlur = () => {
    if (isRequired && isNullOrUndefined(value)) {
      setError('Value is required');
      return;
    }
    switch (type) {
      case "email":
        !validateEmail(value) && setError('Email is not valid');
        break;
      case "password":
        !validatePassword(value) && setError('Password is not valid');
        break;
      case "text":
        isRequired && (isNullOrUndefined(value)) && setError('Value is required');
        break;
      case "phone":
        !validatePhone(value) && setError('Phone is not valid');
        break;
      default:
        break;
    }
  }
  return (
    <>
      <View style={[styles.inputContainer]}>
        {affix ?? affix}
        <TextInput
          style={[styles.input]}
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={val => onChange(val)}
          secureTextEntry={isShowPass}
          placeholderTextColor={'#747688'}
          keyboardType={typeKeyboard ?? 'default'}
          autoCapitalize="none"
          onEndEditing={onEnd}
          onBlur={handleOnBlur}
        />
        {suffix ?? suffix}
        <TouchableOpacity
          onPress={
            isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
          }>
          {isPassword ? (
            <FontAwesome
              name={isShowPass ? 'eye-slash' : 'eye'}
              size={22}
              color={appColors.gray}
            />
          ) : (
            value.length > 0 &&
            allowClear && (
              <AntDesign name="close" size={22} color={appColors.text} />
            )
          )}
        </TouchableOpacity>
      </View>
      <Text style={[globalStyles.text, { color: "red", marginBottom: 8 }]}>{error}</Text>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 8,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});

//make this component available to the app
export default InputComponent;
