import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLOR, COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const overflows = ['auto', 'hidden', 'scroll', 'visible'];
const margins = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const paddings = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const borderRadiuses = {
  square: null,
  circle: '50%',
  rounded: '4px',
};

class Box extends PureComponent {
  boxNode = createRef();

  getBorder = value => {
    const { borderColor, borderTint } = this.props;
    return `${value}px solid ${COLOR[borderColor.toUpperCase()][borderTint.toUpperCase()]}`;
  };

  render() {
    const {
      alignContent,
      alignItems,
      alignSelf,
      backgroundColor,
      backgroundTint,
      borderBottomWidth,
      borderColor,
      borderLeftWidth,
      borderRightWidth,
      borderTint,
      borderTopWidth,
      borderWidth,
      borderRadius,
      borderTopLeftRadius = borderRadius,
      borderTopRightRadius = borderRadius,
      borderBottomLeftRadius = borderRadius,
      borderBottomRightRadius = borderRadius,
      boxSizing,
      children,
      className,
      display,
      element,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
      margin,
      marginHorizontal = margin,
      marginVertical = margin,
      marginBottom = marginVertical,
      marginLeft = marginHorizontal,
      marginRight = marginHorizontal,
      marginTop = marginVertical,
      order,
      overflow,
      overflowX,
      overflowY,
      padding,
      paddingHorizontal = padding,
      paddingVertical = padding,
      paddingBottom = paddingVertical,
      paddingLeft = paddingHorizontal,
      paddingRight = paddingHorizontal,
      paddingTop = paddingVertical,
      style,
      textAlign,
      ...others
    } = this.props;

    const classNames = cx(
      theme['box'],
      {
        [theme[`align-content-${alignContent}`]]: alignContent,
        [theme[`align-items-${alignItems}`]]: alignItems,
        [theme[`align-self-${alignSelf}`]]: alignSelf,
        [theme[`background-color-${backgroundColor}-${backgroundTint}`]]: backgroundColor && backgroundTint,
        [theme[`background-color-${backgroundColor}`]]:
          backgroundColor && (!backgroundTint || backgroundTint === 'normal'),
        [theme[`display-${display}`]]: display,
        [theme[`flex-direction-${flexDirection}`]]: flexDirection,
        [theme[`flex-wrap-${flexWrap}`]]: flexWrap,
        [theme[`justify-content-${justifyContent}`]]: justifyContent,
        [theme[`margin-bottom-${marginBottom}`]]: marginBottom > 0,
        [theme[`margin-left-${marginLeft}`]]: marginLeft > 0,
        [theme[`margin-right-${marginRight}`]]: marginRight > 0,
        [theme[`margin-top-${marginTop}`]]: marginTop > 0,
        [theme[`padding-bottom-${paddingBottom}`]]: paddingBottom > 0,
        [theme[`padding-left-${paddingLeft}`]]: paddingLeft > 0,
        [theme[`padding-right-${paddingRight}`]]: paddingRight > 0,
        [theme[`padding-top-${paddingTop}`]]: paddingTop > 0,
        [theme[`text-align-${textAlign}`]]: textAlign,
      },
      className,
    );

    const elementStyles = {
      ...(borderWidth && { border: this.getBorder(borderWidth) }),
      ...(borderBottomWidth && { borderBottom: this.getBorder(borderBottomWidth) }),
      ...(borderLeftWidth && { borderLeft: this.getBorder(borderLeftWidth) }),
      ...(borderRightWidth && { borderRight: this.getBorder(borderRightWidth) }),
      ...(borderTopWidth && { borderTop: this.getBorder(borderTopWidth) }),
      ...(borderRadius && { borderRadius: borderRadiuses[borderRadius] }),
      ...(borderTopLeftRadius && { borderTopLeftRadius: borderRadiuses[borderTopLeftRadius] }),
      ...(borderTopRightRadius && { borderTopRightRadius: borderRadiuses[borderTopRightRadius] }),
      ...(borderBottomLeftRadius && { borderBottomLeftRadius: borderRadiuses[borderBottomLeftRadius] }),
      ...(borderBottomRightRadius && { borderBottomRightRadius: borderRadiuses[borderBottomRightRadius] }),
      ...(boxSizing && { boxSizing }),
      ...(flex && { flex }),
      ...(flexBasis && { flexBasis }),
      ...(!isNaN(flexGrow) ? { flexGrow } : {}),
      ...(!isNaN(flexShrink) ? { flexShrink } : {}),
      ...(!isNaN(order) ? { order } : {}),
      ...(overflow && { overflow }),
      ...(overflowX && { overflowX }),
      ...(overflowY && { overflowY }),
      ...style,
    };

    const Element = element;

    return (
      <Element ref={this.boxNode} className={classNames} style={elementStyles} {...others}>
        {children}
      </Element>
    );
  }
}

Box.propTypes = {
  alignContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly']),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'baseline', 'stretch']),
  alignSelf: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),
  backgroundColor: PropTypes.oneOf(COLORS),
  backgroundTint: PropTypes.oneOf(TINTS),
  borderBottomWidth: PropTypes.number,
  borderColor: PropTypes.oneOf(COLORS),
  borderLeftWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  borderTint: PropTypes.oneOf(TINTS),
  borderTopWidth: PropTypes.number,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  borderTopLeftRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  borderTopRightRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  borderBottomLeftRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  borderBottomRightRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  boxSizing: PropTypes.oneOf(['border-box', 'content-box']),
  children: PropTypes.any,
  className: PropTypes.string,
  display: PropTypes.oneOf(['inline', 'inline-block', 'block', 'flex', 'inline-flex']),
  element: PropTypes.node,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  margin: PropTypes.oneOf(margins),
  marginHorizontal: PropTypes.oneOf(margins),
  marginVertical: PropTypes.oneOf(margins),
  marginBottom: PropTypes.oneOf(margins),
  marginLeft: PropTypes.oneOf(margins),
  marginRight: PropTypes.oneOf(margins),
  marginTop: PropTypes.oneOf(margins),
  order: PropTypes.number,
  overflow: PropTypes.oneOf(overflows),
  overflowX: PropTypes.oneOf(overflows),
  overflowY: PropTypes.oneOf(overflows),
  padding: PropTypes.oneOf(paddings),
  paddingHorizontal: PropTypes.oneOf(paddings),
  paddingVertical: PropTypes.oneOf(paddings),
  paddingBottom: PropTypes.oneOf(paddings),
  paddingLeft: PropTypes.oneOf(paddings),
  paddingRight: PropTypes.oneOf(paddings),
  paddingTop: PropTypes.oneOf(paddings),
  style: PropTypes.object,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
};

Box.defaultProps = {
  borderColor: 'neutral',
  borderTint: 'dark',
  borderRadius: 'square',
  element: 'div',
  margin: 0,
  padding: 0,
};

export default Box;
