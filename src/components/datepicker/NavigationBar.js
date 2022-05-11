import React from 'react';
import PropTypes from 'prop-types';
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

const NavigationBar = ({
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
    onPreviousClick();
  };

  const handleNextClick = () => {
    onNextClick();
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

NavigationBar.propTypes = {
  className: PropTypes.string,
  localeUtils: PropTypes.object,
  nextMonth: PropTypes.instanceOf(Date),
  previousMonth: PropTypes.instanceOf(Date),
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default NavigationBar;
