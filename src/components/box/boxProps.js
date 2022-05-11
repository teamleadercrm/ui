import omit from 'lodash.omit';
import pick from 'lodash.pick';

const boxProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'borderWidth',
  'borderBottomWidth',
  'borderColor',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTint',
  'borderTopWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'boxSizing',
  'className',
  'style',
  'display',
  'element',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'justifyContent',
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'textAlign',
  'to',
];

const omitBoxProps = (props) => omit(props, boxProps);
const pickBoxProps = (props) => pick(props, boxProps);

export default boxProps;
export { omitBoxProps, pickBoxProps };
