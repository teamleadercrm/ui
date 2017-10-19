import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Box extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
    marginBottom: PropTypes.oneOf(spacings),
    marginLeft: PropTypes.oneOf(spacings),
    marginRight: PropTypes.oneOf(spacings),
    marginTop: PropTypes.oneOf(spacings),
    paddingBottom: PropTypes.oneOf(spacings),
    paddingLeft: PropTypes.oneOf(spacings),
    paddingRight: PropTypes.oneOf(spacings),
    paddingTop: PropTypes.oneOf(spacings),
  };

  static defaultProps = {
    element: 'div',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  };

  render() {
    const { children, className, element, marginBottom, marginLeft, marginRight, marginTop, paddingBottom, paddingLeft, paddingRight, paddingTop, ...others } = this.props;

    const classNames = cx(
      theme['box'],
      {
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
