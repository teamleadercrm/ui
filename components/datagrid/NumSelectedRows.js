import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody, Monospaced } from '../typography';
import theme from './theme.css';

class NumSelectedRows extends PureComponent {
  render() {
    const { numSelectedRows, numSelectedRowsLabel } = this.props;

    console.log('this.props', this.props);

    return (
      <Box display="flex" align-items="center" marginRight={3} className={theme['num-selected-rows']}>
        <TextBody className={theme['num-selected-rows-number']} marginRight={1}>
          <Monospaced>{numSelectedRows}</Monospaced>
        </TextBody>
        <TextBody className={theme['num-selected-rows-label']} color="neutral">
          {numSelectedRowsLabel}
        </TextBody>
      </Box>
    );
  }
}

NumSelectedRows.propTypes = {
  /** The displayed number of selected rows */
  numSelectedRows: PropTypes.number,
  /** The label accompanying the number of selected rows */
  numSelectedRowsLabel: PropTypes.string,
};

NumSelectedRows.defaultProps = {
  numSelectedRows: 0,
  numSelectedRowsLabel: 'selected',
};

export default NumSelectedRows;
