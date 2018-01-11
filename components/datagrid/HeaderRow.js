import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

class HeaderRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onSelectionChange: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
    sliceFrom: PropTypes.number,
    sliceTo: PropTypes.number,
  };

  render() {
    const { className, children, sliceFrom, sliceTo, onSelectionChange, selected, selectable, ...others } = this.props;

    const childrenSliced = children.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['header-row'], className);

    return (
      <Row backgroundColor="neutral" className={classNames} data-teamleader-ui="datagrid-header-row" {...others}>
        {selectable && (
          <HeaderCell flex="min-width">
            <Checkbox checked={selected} onChange={onSelectionChange} size="large" />
          </HeaderCell>
        )}
        {childrenSliced}
      </Row>
    );
  }
}

export default HeaderRow;
