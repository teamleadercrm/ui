import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { Box } from '../box';
import { IconButton } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

class DatePicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    range: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    range: false,
    size: 'medium',
  };

  convertModifiersToClassnames(modifiers) {
    if(!modifiers) {
      return;
    }

    const convertedModifiers = {};

    Object.keys(modifiers).forEach(key => {
      convertedModifiers[theme[key]] = modifiers[key];
    });

    return convertedModifiers;
  }

  render() {
    const { className, modifiers, range, size, ...others } = this.props;

    const classNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: range,
      },
      className,
    );

    const Navbar = ({ nextMonth, previousMonth, onPreviousClick, onNextClick, className, localeUtils }) => {
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

    const Weekday = ({ weekday, className, localeUtils, locale }) => {
      const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
      return (
        <div className={className} title={weekdayName}>
          {size === 'large' ? weekdayName.slice(0, 2) : weekdayName.slice(0, 1)}
        </div>
      );
    };

    return (
      <DayPicker
        className={classNames}
        classNames={theme}
        modifiers={this.convertModifiersToClassnames(modifiers)}
        navbarElement={<Navbar />}
        weekdayElement={<Weekday />}
        {...others}
      />
    );
  }
}

export default DatePicker;
