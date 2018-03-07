/**
 *
 */

'use strict';

import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import StyleConst from '../StyleConst';
import CommonStyle from '../default/CommonStyle';

const width = StyleConst.screenWidth * 0.7;

const Styles = StyleSheet.flatten([CommonStyle, {

  container: {
    flex: 1,
    alignItems: 'center',
  },

  form: {
    width: StyleConst.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: width * 0.2,
    // marginTop: height,
  },

  inputText: {
    backgroundColor: '#f7f7f7',
    // borderLeftWidth: StyleSheet.hairlineWidth,
    height: 40,
    // marginLeft: 10,
    paddingLeft: 5,
    fontSize: 17,
    textAlignVertical: 'center',
  },

  button: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 8,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
  },

}]);

export default Styles;
