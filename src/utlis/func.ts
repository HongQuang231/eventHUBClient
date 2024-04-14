import { PixelRatio, Platform } from "react-native";
import { appInfo } from "../global/styles";

const guidelineBaseWidth = 390;
// const guidelineBaseHeight = 680;

const scale = function (size: number) {
  if (Platform.OS === 'ios') {
    if (Platform.isPad) {
      return Math.round((appInfo.sizes.WIDTH / guidelineBaseWidth) * size);
    }
    return Math.round(
      PixelRatio.roundToNearestPixel((appInfo.sizes.WIDTH / guidelineBaseWidth) * size),
    );
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }
};
export { scale };

export const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validatePassword = (password: string) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(String(password));
}

export const validatePhone = (phone: string) => {
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
}

export const isNullOrUndefined = (data: any) => {
  if (data === null || data === undefined || data === '') {
    return true;
  }
  return false;
}