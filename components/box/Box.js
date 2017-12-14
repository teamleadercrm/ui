import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Box extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    display: PropTypes.oneOf(['inline', 'inline-block', 'block', 'flex', 'inline-flex']),
    element: PropTypes.node,
    margin: PropTypes.oneOf(spacings),
    marginHorizontal: PropTypes.oneOf(spacings),
    marginVertical: PropTypes.oneOf(spacings),
    marginBottom: PropTypes.oneOf(spacings),
    marginLeft: PropTypes.oneOf(spacings),
    marginRight: PropTypes.oneOf(spacings),
    marginTop: PropTypes.oneOf(spacings),
    padding: PropTypes.oneOf(spacings),
    paddingHorizontal: PropTypes.oneOf(spacings),
    paddingVertical: PropTypes.oneOf(spacings),
    paddingBottom: PropTypes.oneOf(spacings),
    paddingLeft: PropTypes.oneOf(spacings),
    paddingRight: PropTypes.oneOf(spacings),
    paddingTop: PropTypes.oneOf(spacings),
  };

  static defaultProps = {
    element: 'div',
    margin: 0,
    padding: 0,
  };

  render() {
    const {
      children,
      className,
      display,
      element,
      margin,
      marginHorizontal = margin,
      marginVertical = margin,
      marginBottom = marginVertical,
      marginLeft = marginHorizontal,
      marginRight = marginHorizontal,
      marginTop = marginVertical,
      padding,
      paddingHorizontal = padding,
      paddingVertical = padding,
      paddingBottom = paddingVertical,
      paddingLeft = paddingHorizontal,
      paddingRight = paddingHorizontal,
      paddingTop = paddingVertical,
      ...others
    } = this.props;

    const classNames = cx(
      theme['box'],
      {
        [theme[`display-${display}`]]: display,
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

    const Element = element;

    return (
      <Element className={classNames} {...others}>
        {children}
      </Element>
    );
  }
}

export default Box;
