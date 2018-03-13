import React from 'react';
import { Box } from '../box';
import { IconButton } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

const NavigationBar = ({ nextMonth, previousMonth, onPreviousClick, onNextClick, className, localeUtils, size }) => {
  const months = localeUtils.getMonths();
  const previousMonthButtonLabel = months[previousMonth.getMonth()];
  const nextMonthButtonLabel = months[nextMonth.getMonth()];

  return (
    <Box className={className} display="flex" justifyContent="space-between">
      <IconButton
        icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
        onClick={() => onPreviousClick()}
        title={previousMonthButtonLabel}
      />
      <IconButton
        icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
        onClick={() => onNextClick()}
        title={nextMonthButtonLabel}
      />
    </Box>
  );
};

export default NavigationBar;
