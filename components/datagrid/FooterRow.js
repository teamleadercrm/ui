import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

class FooterRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    preserveSelectableSpace: PropTypes.bool,
    sliceFrom: PropTypes.number,
    sliceTo: PropTypes.number,
  };

  render() {
    const { className, children, sliceFrom, sliceTo, preserveSelectableSpace, ...others } = this.props;

    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['footer-row'], className);

    return (
      <Row className={classNames} data-teamleader-ui="datagrid-footer-row" {...others}>
        {preserveSelectableSpace && <Cell flex="min-width" />}
        {childrenSliced}
      </Row>
    );
  }
}

export default FooterRow;
