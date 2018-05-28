import omit from 'lodash.omit';

const omitBoxProps = props =>
  omit(props, [
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
    'padding',
    'paddingHorizontal',
    'paddingVertical',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
  ]);

export default omitBoxProps;
