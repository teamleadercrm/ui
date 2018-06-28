import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';

class ToastContainer extends PureComponent {
  render() {
    const { children, className } = this.props;
    const classNames = cx(theme['container'], className);

    return <ul className={classNames}>{children}</ul>;
  }
}

ToastContainer.propTypes = {
  /** The content to display inside the ToastContainer */
  children: PropTypes.any,
  /** A custom class name for custom styling */
  className: PropTypes.string,
};

export default ToastContainer;
