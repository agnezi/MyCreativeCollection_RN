import {colors} from '@utils/constants/colors';
import {ColorSchemeName, ImageStyle, TextStyle, ViewStyle} from 'react-native';

export const textInput = (
  scheme: ColorSchemeName,
): ViewStyle | ImageStyle | TextStyle => ({
  borderBottomColor: colors.lightBlue,
  padding: 8,
  borderBottomWidth: 2,
  marginHorizontal: 8,
  marginVertical: 4,
  fontSize: 16,
  color: scheme === 'dark' ? 'white' : 'black',
});

export const loginTouchable = (
  scheme: ColorSchemeName,
): ViewStyle | ImageStyle | TextStyle => ({
  backgroundColor: scheme === 'dark' ? 'white' : 'black',
  alignItems: 'center',
  padding: 16,
  marginHorizontal: 36,
  marginVertical: 4,
  borderRadius: 12,
});

export const loginTouchableLabel = (
  scheme: ColorSchemeName,
): ViewStyle | ImageStyle | TextStyle => ({
  fontSize: 16,
  fontWeight: 'bold',
  color: scheme === 'dark' ? 'black' : 'white',
});
