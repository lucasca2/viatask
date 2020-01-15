const defaultColors = {
  white: '#F1F1F1',
  whiteDarken: '#A0A0A0',
  black: '#101010',

  primary: '#4DA747',
  secondary: '#FFFFFF',

  success: '#4DA747',
  danger: '#E3495A',
  warning: '#FFB800',

  link: '#5882D8',
  text: '#212121',
  // border: '#E9E9E9'
};

const revertColors = {
  white: defaultColors.black,
  whiteDarken: defaultColors.black,
  black: defaultColors.white,

  primary: defaultColors.secondary,
  secondary: defaultColors.primary,

  success: defaultColors.secondary,
  danger: defaultColors.secondary,
  warning: defaultColors.secondary,

  link: defaultColors.primary,
  text: defaultColors.primary,
  border: defaultColors.primary,
};

export default {
  default: defaultColors,
  revert: revertColors,

  background: defaultColors.secondary,
  placeholder: defaultColors.whiteDarken,
  border: defaultColors.white,
  input: defaultColors.white,
};
