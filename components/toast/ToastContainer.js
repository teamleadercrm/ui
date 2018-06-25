import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';

class ToastContainer extends PureComponent {
  render() {
    const { children } = this.props;

    const classNames = cx(theme['container']);

    return <div className={classNames}>{children}</div>;
  }
}

ToastContainer.propTypes = {
  /** List of toasts to be displayed */
  children: PropTypes.any,
};

export default ToastContainer;
