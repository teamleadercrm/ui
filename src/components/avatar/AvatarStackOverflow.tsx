import React from 'react';
import cx from 'classnames';
import uiUtilities from '@teamleader/ui-utilities';

import Box from '../box';
import theme from './theme.css';

interface Props {
  displayMax: number;
  overflowAmount: number;
  onOverflowClick: () => void;
}

const AvatarStackOverflow = ({ displayMax, overflowAmount, onOverflowClick }: Props) => {
  return (
    <Box
      alignItems="center"
      className={cx(uiUtilities['reset-font-smoothing'], theme['overflow'])}
      display="flex"
      justifyContent="center"
      onClick={onOverflowClick}
    >
      {displayMax > 0 && `+`}
      {overflowAmount}
    </Box>
  );
};

export default AvatarStackOverflow;
