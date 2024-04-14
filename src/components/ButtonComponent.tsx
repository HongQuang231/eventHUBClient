import { Text, View } from "native-base";
import { ReactNode } from "react";
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { FontFamily, appColors } from "../global/styles";
import { globalStyles } from "../global/common";
import { scale } from "../utlis/func";

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    textColor,
    textStyles,
    textFont,
    color,
    styles,
    onPress,
    iconFlex,
    type,
    disable,
  } = props;

  return type === 'primary' ? (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : appColors.primary,
            opacity: disable ? 0.5 : 1,
            marginBottom: 17,
            width: '90%',
          },
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <Text style={[globalStyles.text, {
          color: textColor ? textColor : appColors.white,
          fontSize: scale(16),
          fontFamily: textFont ? textFont : FontFamily.medium,
          textAlign: 'center',
        }]}>{text}</Text>
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Text style={[globalStyles.text, {
        color: textColor ? textColor : appColors.white,
        fontSize: scale(15),
        fontFamily: textFont ? textFont : FontFamily.medium,
      }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;