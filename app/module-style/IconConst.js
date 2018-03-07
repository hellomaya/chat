import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const icon = {
  IconNavBarFilter: (<Icon name={'filter-list'} size={30} color={'#FFFFFF'} />),
  IconNavBarAdd: (<Icon name={'add'} size={30} color={'#FFFFFF'} />),
  IconNavBarBack: (<Icon name={'arrow-back'} size={28} color={'#FFFFFF'} />),
  IconNavBarSearch: (<Icon name={'search'} size={28} color={'#FFFFFF'} />),
  IconNavBarSearchClose: (<Icon name={'close'} size={28} color={'#FFFFFF'} />),
  IconNavBarSearchAdd: (<Icon name={'add'} size={28} color={'#FFFFFF'} />),


  // splash
  IconGo: (<Icon name={'arrow-forward'} size={50} color={'#995cff'} />),
  IconEmail: (<Icon name={'mail-outline'} size={25} color={'orange'} />),
  IconPassword: (<Icon name={'lock-outline'} size={25} color={'orange'} />),
  IconSend: (<Icon name={'send'} size={25} color={'orange'} />),

  // order
  IconOrderCompleted: (<Icon name={'check-box'} size={16} color={'#995cff'} />),
  IconOrderPaid: (<Icon name={'attach-money'} size={12} color={'orange'} />),
  IconOrderPaid2: (<Icon name={'attach-money'} size={12} color={'#fff9b8'} />),
  IconOrderDelivered: (<Icon name={'local-shipping'} size={12} color={'orange'} />),
  IconOrderDelivered2: (<Icon name={'local-shipping'} size={12} color={'#fff9b8'} />),
  IconOrderCompleteAll: (<Icon name={'check'} size={15} color={'#F57F17'} />),
  IconProductSelected: (<Icon name={'check-circle'} size={25} color={'#F57F17'} />),

  IconReportSelected: (<Icon name={'add-circle'} size={18} color={'#F57F17'} />),
  IconReportUnSelected: (<Icon name={'add-circle'} size={18} color={'#CCC'} />),

  IconOrderError: (<Icon name={'error'} size={16} color={'#ff6e69'} />),
  IconOrderExpand: (
    <Icon
      name={'keyboard-arrow-down'}
      size={16}
      color={'#F57F17'}
    />),
  IconOrderDate: (
    <Icon
      name={'date-range'}
      backgroundColor={'transparent'}
      color={'#0076FF'}
      size={16}
    />),
  IconOrderUserSelector: (
    <Icon
      name={'account-circle'}
      size={28}
      color={'#F57F17'}
    />),
  IconOrderDateSelector: (
    <Icon
      name={'date-range'}
      color={'#F57F17'}
      size={28}
    />),

  IconOrderAdd: (<Icon name={'add-circle'} size={28} color={'#FFFFFF'} />),

  // product
  IconProductIcon: (
    <Icon
      name={'photo'}
      size={38}
      color={'#b5c5ff'}
      style={{ padding: 5 }}
    />),
  IconProductPhoto: (
    <Icon
      name={'image'}
      size={50}
      color={'#b5c5ff'}
    />),
  IconAddCategory: (
    <Icon
      name={'add-circle'}
      size={28}
      color={'#F57F17'}
    />),
  IconProductTakePhoto: (<Icon
    name={'camera'}
    size={50}
    color={'#F57F17'}
    style={{ padding: 10 }}
  />),

  // product category
  IconCategoryItemRemove: (
    <Icon
      name={'remove-circle'}
      color={'#F57F17'}
      size={28}
      style={{
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    />),
  IconCategoryItemAdd: (
    <Icon
      name={'add-circle'}
      color={'#F57F17'}
      size={28}
      style={{
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    />),
  IconCategoryRemoveAll: (<Icon
    name={'remove-circle'}
    color={'#F7F7F7'}
    size={28}
  />),
  IconCategoryAddTop: (
    <Icon
      name={'add-circle'}
      backgroundColor={'transparent'}
      color={'#F7F7F7'}
      size={28}
    />),

  IconTrash: (
    <Icon
      name={'delete'}
      backgroundColor={'transparent'}
      color={'#f59f59'}
      size={15}
    />
  ),

  IconRemove: (
    <Icon
      name={'close'}
      backgroundColor={'transparent'}
      color={'#f59f59'}
      size={15}
    />
  ),
  IconEdit: (
    <Icon
      name={'edit'}
      backgroundColor={'transparent'}
      color={'#f59f59'}
      size={15}
    />
  ),

  // shared
  IconCodeScanner: (<Icon2
    name={'barcode-scan'}
    size={28}
    color={'#F57F17'}
  />),
  IconModifierCellForward: (
    <Icon
      name={'chevron-right'}
      backgroundColor={'transparent'}
      color={'#F57F17'}
      size={25}
      style={{ padding: 5 }}
    />),

  // menu

  IconDrawer: (
    <Icon
      name={'menu'}
      backgroundColor={'transparent'}
      color={'#FFFFFF'}
      size={25}
    />),
};

export default icon;
