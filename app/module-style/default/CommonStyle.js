/**
 *
 */

'use strict';

import {
  StyleSheet,
  Platform,
} from 'react-native';

import StyleConst from '../StyleConst';


/**
 * A common style used across the app, basically, the app
 * will have, list, form, two basic module.
 *
 * In list, we will have list-item, which is a row based,
 * and this row could have many more rows in it, and for
 * each of them, could have different grid.
 *
 * The row may have different cell, or not, so it will be:
 *
 * - box
 * - row
 * - listItem
 * - listView --> listItem --> row | box
 *
 * When the list item has more than one lines :
 *
 * listItem -
 *   A -
 *   B -
 *   C -
 *
 */
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },


  header: {

    // flex: 1,
    padding: 5,
    paddingLeft: 0,
    justifyContent: 'center',
    // backgroundColor: StyleConst.bgColorForm,
    borderColor: StyleConst.borderSecondColor,
    borderBottomWidth: 2,
    alignItems: 'center',
  },

  box: {
    padding: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: StyleConst.bgColorTransparent,
  },

  boxWithBackground: {
    flex: 1,
    padding: 5,
    paddingLeft: 0,
    justifyContent: 'center',
    backgroundColor: StyleConst.bgColorForm,
  },

  boxWithBorderBottom: {
    flex: 1,
    padding: 5,
    paddingLeft: 0,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: StyleConst.borderPrimaryColor,
  },

  row: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowWithBackground: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: StyleConst.bgColorForm,
  },

  rowWithBorderBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: StyleConst.borderPrimaryColor,
  },

  col: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },

  colNoPadding: {
    flex: 1,
    justifyContent: 'center',
  },

  colFloatStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
    // alignItems: 'center',
  },

  colCenter: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colFix: {
    flex: 0,
    padding: 5,
    justifyContent: 'center',
  },

  colFixFirst: {
    flex: 0,
    padding: 5,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  colFixLast: {
    flex: 0,
    padding: 5,
    justifyContent: 'center',
  },

  colFixFloat: {
    flex: 0,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  textTitle: {
    color: StyleConst.textHelpColor,
    padding: 5,
    fontWeight: 'normal',
    fontSize: StyleConst.contentFontSize,
  },

  textTitleSmall: {
    color: StyleConst.textHelpColor,
    paddingLeft: 5,
    fontSize: StyleConst.contentFontSize - 2,
  },

  textContent: {
    color: StyleConst.textColor,
    padding: StyleConst.textPadding,
    fontSize: StyleConst.contentFontSize,
  },

  textContentSmall: {
    fontSize: StyleConst.contentFontSize - 2,
    color: StyleConst.textColor,
  },

  textHelp: {
    fontSize: StyleConst.contentFontSize - 2,
    color: StyleConst.textHelpColor,
  },

  textHighlight: {
    color: '#0076FF',
    padding: 5,
    fontSize: StyleConst.contentFontSize,
  },

  textHighlightBold: {
    color: '#0076FF',
    fontWeight: '700',
    paddingLeft: 5,
    fontSize: StyleConst.contentFontSize,
  },

  textHighlightSmall: {
    color: '#0076FF',
    paddingLeft: 5,
    fontSize: StyleConst.contentFontSize - 2,
  },

  pickerStyle: {
    flex: 1,
    padding: 5,
    height: 35,
    color: StyleConst.buttonPrimaryColor,
  },

  buttonStatus: {},

  buttonRemove: {
    width: 25,
    height: 25,
    padding: 5,
    backgroundColor: '#FFFFFF',
    marginRight: 5,
  },

  buttonRemoveText: {
    color: '#FFFFFF',
    fontSize: StyleConst.contentFontSize,
  },

  buttonInfo: {
    // backgroundColor: StyleConst.buttonThirdColor,
    borderColor: StyleConst.buttonPrimaryColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderRadius: 5,
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  buttonInfoText: {
    color: '#FFFFFF',
    fontSize: StyleConst.contentFontSize,
  },

  buttonRoundLeft: {
    width: 20,
    height: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'orange',
    borderWidth: StyleSheet.hairlineWidth,
    borderRightWidth: 0,
  },

  buttonRoundRight: {
    width: 20,
    height: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'orange',
    borderWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: 0,
  },

  // form style

  form: {
    backgroundColor: StyleConst.bgColorForm,
  },

  input: {
    color: 'gray',
    // borderColor: StyleConst.borderPrimaryColor,
    padding: 5,
    fontSize: StyleConst.contentFontSize,
    height: 35,
    marginRight: 30,
  },

  inputInLine: {
    color: 'gray',
    // borderColor: StyleConst.borderPrimaryColor,
    padding: 3,
    fontSize: StyleConst.contentFontSize - 2,
    height: 35,
    // height: 25,
    marginRight: 30,
  },

  inputText: {
    color: StyleConst.textColor,
    padding: StyleConst.textPadding,
    fontSize: StyleConst.contentFontSize,
  },

  inputTitle: {
    color: StyleConst.textHelpColor,
    borderColor: StyleConst.borderPrimaryColor,
    padding: 5,
    fontSize: StyleConst.contentFontSize,
    marginRight: 1,
  },

  inputFix: {
    color: StyleConst.textColor,
    borderColor: StyleConst.borderPrimaryColor,
    padding: 5,
    fontSize: StyleConst.contentFontSize,
    height: 35,
    marginRight: 30,
  },

  textArea: {
    borderColor: StyleConst.borderPrimaryColor,
    borderRightWidth: 1,
    color: StyleConst.textColor,
    fontSize: StyleConst.contentFontSize,
    padding: 5,
    height: 80,
    textAlignVertical: 'top',
    marginRight: 30,
  },

  picker: {
    flex: 1,
    ...Platform.select({
      android: {
        height: 35,
      },
    }),
  },
});

export default styles;
