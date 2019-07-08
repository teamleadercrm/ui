import omit from 'lodash.omit';
import pick from 'lodash.pick';
var boxProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'boxSizing',
  'children',
  'className',
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
];

var omitBoxProps = function omitBoxProps(props) {
  return omit(props, boxProps);
};

var pickBoxProps = function pickBoxProps(props) {
  return pick(props, boxProps);
};

export default boxProps;
export { omitBoxProps, pickBoxProps };
