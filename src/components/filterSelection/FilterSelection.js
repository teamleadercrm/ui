import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';

export const Status = {
  ACTIVE: 'active',
  DEFAULT: 'default',
  DISABLED: 'disabled',
  FOCUSED: 'focused',
  INVALID: 'invalid',
  BROKEN: 'broken',
};

const FilterSelection = ({ label, status, amount, onClick, onClearClick }, ref) => {
  return <Box ref={ref}>Hello FilterSelection!</Box>;
};

FilterSelection.propTypes = {
  label: PropTypes.string,
  status: PropTypes.oneOf(Object.values(Status)),
  amount: PropTypes.number,
  onClick: PropTypes.func,
  onClearClick: PropTypes.func,
};

FilterSelection.defaultProps = {
  label: '',
  status: Status.DEFAULT,
  amount: null,
  onClick: null,
  onClearClick: null,
};

export default memo(FilterSelection);
