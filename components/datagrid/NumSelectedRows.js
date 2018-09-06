import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody, Monospaced } from '../typography';
import theme from './theme.css';

class NumSelectedRows extends PureComponent {
  render() {
    const { numSelectedRows, label } = this.props;

    return (
      <Box display="flex" align-items="center" className={theme['num-selected-rows']}>
        <TextBody marginRight={1}>
          <Monospaced>{numSelectedRows}</Monospaced>
        </TextBody>
        <TextBody>{label}</TextBody>
      </Box>
    );
  }
}

NumSelectedRows.propTypes = {
  /** The displayed number of selected rows */
  numSelectedRows: PropTypes.number,
  /** The label accompanying the number of selected rows */
  label: PropTypes.string,
};

NumSelectedRows.defaultProps = {
  numSelectedRows: 0,
  label: 'selected',
};

export default NumSelectedRows;
