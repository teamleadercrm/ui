import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange, isSelectingFirstDay } from './utils';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerRange extends PureComponent {
  state = {
    selectedStartDate: null,
    selectedEndDate: null,
    enteredTo: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.selectedRange !== undefined &&
      (props.selectedRange.selectedStartDate !== state.selectedStartDate ||
        props.selectedRange.selectedEndDate !== state.selectedEndDate)
    ) {
      return {
        selectedStartDate: props.selectedRange.selectedStartDate,
        selectedEndDate: props.selectedRange.selectedEndDate,
        enteredTo: props.selectedRange.selectedEndDate,
      };
    }

    return null;
  }

  handleDayClick = day => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState(
        {
          selectedStartDate: day,
          selectedEndDate: null,
          enteredTo: null,
        },
        () => this.props.onChange({ selectedStartDate: day, selectedEndDate: null }),
      );
    } else {
      this.setState(
        {
          selectedEndDate: day,
          enteredTo: day,
        },
        () => this.props.onChange({ selectedStartDate, selectedEndDate: day }),
      );
    }
  };

  handleDayMouseEnter = day => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  };

  render() {
    const { className, size, ...others } = this.props;
    const { selectedStartDate, enteredTo } = this.state;
    const modifiers = { from: selectedStartDate, to: enteredTo };
    const selectedDays = [selectedStartDate, { from: selectedStartDate, to: enteredTo }];

    const classNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: hasRange(selectedDays),
      },
      className,
    );

    return (
      <DayPicker
        {...others}
        className={classNames}
        classNames={theme}
        modifiers={convertModifiersToClassnames(modifiers, theme)}
        navbarElement={<NavigationBar size={size} />}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
        selectedDays={selectedDays}
        weekdayElement={<WeekDay size={size} />}
      />
    );
  }
}

DatePickerRange.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  selectedRange: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePickerRange.defaultProps = {
  size: 'medium',
};

export default DatePickerRange;
