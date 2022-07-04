import React from 'react';
import { Box } from '../box';
import IconButton from '../iconButton';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';
import theme from './theme.css';
import cx from 'classnames';
import { LocaleUtils } from 'react-day-picker';
import { Size } from './WeekDay';
import { GenericComponent } from '../../@types/types';

interface NavigationBarProps {
  className?: string;
  localeUtils: LocaleUtils;
  nextMonth: Date;
  previousMonth: Date;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
  size?: Size;
  withMonthPicker?: boolean;
}

const NavigationBar: GenericComponent<NavigationBarProps> = ({
  className,
  localeUtils,
  nextMonth,
  previousMonth,
  size,
  withMonthPicker,
  onNextClick,
  onPreviousClick,
}) => {
  const months = localeUtils.getMonths();
  const previousMonthButtonLabel = months[previousMonth.getMonth()];
  const nextMonthButtonLabel = months[nextMonth.getMonth()];

  const handlePreviousClick = () => {
    onPreviousClick && onPreviousClick();
  };

  const handleNextClick = () => {
    onNextClick && onNextClick();
  };

  return (
    <Box
      className={cx(className, { [theme['navBar-with-month-picker']]: withMonthPicker })}
      display="flex"
      justifyContent="space-between"
    >
      <IconButton
        color="teal"
        size={size === 'large' ? 'medium' : 'small'}
        icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
        onClick={handlePreviousClick}
        title={previousMonthButtonLabel}
      />
      <IconButton
        color="teal"
        size={size === 'large' ? 'medium' : 'small'}
        icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
        onClick={handleNextClick}
        title={nextMonthButtonLabel}
      />
    </Box>
  );
};

export default NavigationBar;
