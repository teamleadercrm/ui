import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class FooterRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };

  render() {
    const { className, children } = this.props;

    const classNames = cx(theme['row'], className);

    return (
      <div className={classNames} data-teamleader-ui="datagrid-footer-row">
        {children}
      </div>
    );
  }
}

export default FooterRow;
