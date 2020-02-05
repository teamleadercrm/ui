import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import MonthPicker from './MonthPicker';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class DatePicker extends PureComponent {
  state = {
    selectedDate: null,
    selectedMonth: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedDate !== undefined && props.selectedDate !== state.selectedDate) {
      return {
        selectedDate: props.selectedDate,
      };
    }

    return null;
  }

  handleDayClick = (day, modifiers = {}) => {
    if (modifiers[theme['disabled']]) {
      return;
    }

    this.setState(
      {
        selectedDate: day,
      },
      () => this.props.onChange(day),
    );
  };

  handleYearMonthChange = selectedMonth => {
    this.setState({ selectedMonth });
  };

  render() {
    const { bordered, className, modifiers, size, withMonthPicker, showWeekNumbers, ...others } = this.props;
    const { selectedDate, selectedMonth } = this.state;
    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);
    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['is-bordered']]: bordered,
      },
      className,
    );

    return (
      <Box {...boxProps}>
        <DayPicker
          {...restProps}
          month={selectedMonth}
          className={classNames}
          classNames={theme}
          modifiers={convertModifiersToClassnames(modifiers, theme)}
          navbarElement={<NavigationBar size={size} withMonthPicker={withMonthPicker} />}
          onDayClick={this.handleDayClick}
          selectedDays={selectedDate}
          weekdayElement={<WeekDay size={size} />}
          showWeekNumbers={showWeekNumbers}
          captionElement={
            withMonthPicker
              ? ({ date, localeUtils }) => (
                  <MonthPicker
                    date={date}
                    localeUtils={localeUtils}
                    onChange={this.handleYearMonthChange}
                    small={!showWeekNumbers}
                  />
                )
              : undefined
          }
        />
      </Box>
    );
  }
}

DatePicker.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the DatePicker to give custom styles. */
  className: PropTypes.string,
  /** The modifiers of the DatePicker component. */
  modifiers: PropTypes.object,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the DatePicker component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePicker.defaultProps = {
  bordered: true,
  size: 'medium',
};

export default DatePicker;
