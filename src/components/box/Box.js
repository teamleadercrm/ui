import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const overflows = ['auto', 'hidden', 'scroll', 'visible'];
const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Box extends PureComponent {
  boxNode = createRef();

  render() {
    const {
      alignContent,
      alignItems,
      alignSelf,
      backgroundColor,
      backgroundTint,
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
      },
      className,
    );

    const elementStyles = {
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
  margin: PropTypes.oneOf(spacings),
  marginHorizontal: PropTypes.oneOf(spacings),
  marginVertical: PropTypes.oneOf(spacings),
  marginBottom: PropTypes.oneOf(spacings),
  marginLeft: PropTypes.oneOf(spacings),
  marginRight: PropTypes.oneOf(spacings),
  marginTop: PropTypes.oneOf(spacings),
  order: PropTypes.number,
  overflow: PropTypes.oneOf(overflows),
  overflowX: PropTypes.oneOf(overflows),
  overflowY: PropTypes.oneOf(overflows),
  padding: PropTypes.oneOf(spacings),
  paddingHorizontal: PropTypes.oneOf(spacings),
  paddingVertical: PropTypes.oneOf(spacings),
  paddingBottom: PropTypes.oneOf(spacings),
  paddingLeft: PropTypes.oneOf(spacings),
  paddingRight: PropTypes.oneOf(spacings),
  paddingTop: PropTypes.oneOf(spacings),
  style: PropTypes.object,
};

Box.defaultProps = {
  element: 'div',
  margin: 0,
  padding: 0,
};

export default Box;
