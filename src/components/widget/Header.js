import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Island from '../island';
import theme from './theme.css';

const PADDING_VERTICAL = {
  small: 1,
  medium: 2,
  large: 3,
};

class Header extends PureComponent {
  render() {
    const { children, className, size, ...others } = this.props;

    const classNames = cx(theme[`is-${size}`], className);

    return (
      <Island
        {...others}
        alignItems="center"
        className={classNames}
        display="flex"
        size={size}
        paddingVertical={PADDING_VERTICAL[size]}
      >
        {children}
      </Island>
    );
  }
}

Header.propTypes = {
  /** The content to display inside the widget header. */
  children: PropTypes.any,
  /** The size which controls the horizontal padding of the Island. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Header;
