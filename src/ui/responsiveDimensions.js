import { Dimensions  } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const wp = w => Math.round(width * (w / 100));

export const hp = h => Math.round(height * (h / 100));