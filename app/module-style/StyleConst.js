/**
 *
 */

'use strict';

import {
  Platform,
  Dimensions,
} from 'react-native';

import IconConst from './IconConst';

const SCREEN = Dimensions.get('window');

let styleConst;

if (Platform.OS === 'ios') {
  const navBarHeight = 64;
  const tabBarHeight = 50;

  styleConst = {
    screen: SCREEN,
    screenWidth: SCREEN.width,
    screenHeight: SCREEN.height,
    navBarHeight,
    tabBarHeight,
    alphabetListWidth: 20,
    alphabetListHeight: SCREEN.height - navBarHeight - tabBarHeight,
  };
} else {
  const navBarHeight = 54;
  const tabBarHeight = 50;
  styleConst = {
    screen: SCREEN,
    screenWidth: SCREEN.width,
    screenHeight: SCREEN.height,
    navBarHeight,
    tabBarHeight,
    alphabetListWidth: 20,
    alphabetListHeight: SCREEN.height - navBarHeight - tabBarHeight,
  };
}


let style;

if (Platform.OS === 'ios') {
  style = {
    ...styleConst,
    formContentPadding: 2,
    contentFontSize: 15,
    textColor: 'black',
    textColorWhite: '#FFFFFF',
    textInputColor: 'gray',
    textHelpColor: '#50330c',
    textHighlightColor: '#0076FF',
    textPadding: 5,
    borderPrimaryColor: '#E0E0E0',
    borderSecondColor: '#EEE',
    borderThirdColor: '#DDD',
    borderOrderItemColor: '#0076FF',
    borderHighlightColor: '#FF9800',
    //
    alphabetColor: '#6c68cc',
    alphabetSelectColor: '#632929',

    // overall framework color
    // status bar, navigation bar, main background, tab bar

    statusBarBgColor: '#FF6F00',
    navBarBgColor: '#F57F17',

    navBarIconColor: 'black',
    navBarTitleColor: '#FFFFFF',
    navBarButtonTitleColor: '#FFFFFF',

    bgGradientColorTop: '#FFFFFF',
    bgGradientColorMiddle: '#f5e5da',
    bgGradientColorBottom: '#FFFFFF',

    tabBarIconBgColor: '#FFFFFF',
    // tabBarIconBgColor: '#FFFFFF',
    tabBarIconColor: '#7c7c7c',
    tabBarIconSelectColor: '#F57F17',

    // element background color
    bgColorTransparent: 'transparent',
    bgColorSelected: '#CCC',
    bgColorWhite: '#FFFFFF',
    bgColorForm: '#ffffff',
    bgColorGray: '#E0E0E0',

    // button
    buttonPrimaryColor: '#F57F17',
    buttonSecondColor: '#92b6ff',
    buttonThirdColor: '#dde7f5',
    buttonColorOrange: '#ff8d27',
    buttonTextColorA: '#7f7779',
    buttonTextColorB: '#F7F7F7',
    ...IconConst,
  };
} else {
  style = {
    ...styleConst,
    formContentPadding: 2,
    contentFontSize: 15,
    textColor: 'black',
    textColorWhite: '#FFFFFF',
    textInputColor: 'gray',
    textHelpColor: '#50330c',
    textHighlightColor: '#0076FF',
    textPadding: 5,

    borderPrimaryColor: '#E0E0E0',
    borderSecondColor: '#EEE',
    borderThirdColor: '#DDD',
    borderOrderItemColor: '#0076FF',
    borderHighlightColor: '#F57F17',
    //
    alphabetColor: '#6c68cc',
    alphabetSelectColor: '#632929',

    // overall framework color
    // status bar, navigation bar, main background, tab bar

    statusBarBgColor: '#FF6F00',
    navBarBgColor: '#F57F17',

    navBarIconColor: 'black',
    navBarTitleColor: '#FFFFFF',
    navBarButtonTitleColor: '#FFFFFF',

    bgGradientColorTop: '#FFFFFF',
    bgGradientColorMiddle: '#f5e5da',
    bgGradientColorBottom: '#FFFFFF',

    tabBarIconBgColor: '#FFFFFF',
    // tabBarIconBgColor: '#FFFFFF',
    tabBarIconColor: '#7c7c7c',
    tabBarIconSelectColor: '#F57F17',

    // element background color
    bgColorTransparent: 'transparent',
    bgColorSelected: '#CCC',
    bgColorWhite: '#FFFFFF',
    bgColorForm: '#ffffff',
    bgColorGray: '#E0E0E0',

    // button
    buttonPrimaryColor: '#F57F17',
    buttonSecondColor: '#92b6ff',
    buttonThirdColor: '#dde7f5',
    buttonColorOrange: '#ff8d27',
    buttonTextColorA: '#7f7779',
    buttonTextColorB: '#F7F7F7',
    ...IconConst,
  };
}

const Style = style;
export default Style;
