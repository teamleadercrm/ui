import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class FooterRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };

  render() {
    const { className, children, ...others } = this.props;

    return (
      <Row className={className} data-teamleader-ui="datagrid-footer-row" {...others}>
        {children}
      </Row>
    );
  }
}

export default FooterRow;
