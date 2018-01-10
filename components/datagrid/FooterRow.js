import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Row from './Row';

class FooterRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    preserveSelectableSpace: PropTypes.bool,
  };

  render() {
    const { className, children, preserveSelectableSpace, ...others } = this.props;

    return (
      <Row className={className} data-teamleader-ui="datagrid-footer-row" {...others}>
        {preserveSelectableSpace && <Cell flex="min-width" />}
        {children}
      </Row>
    );
  }
}

export default FooterRow;
