import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerRange extends PureComponent {
  state = {
    selectedStartDate: null,
    selectedEndDate: null,
    mouseEnteredEndDate: null,
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
        mouseEnteredEndDate: props.selectedRange.selectedEndDate,
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
          mouseEnteredEndDate: null,
        },
        () => this.props.onChange({ selectedStartDate: day, selectedEndDate: null }),
      );
    } else {
      this.setState(
        {
          selectedEndDate: day,
          mouseEnteredEndDate: day,
        },
        () => this.props.onChange({ selectedStartDate, selectedEndDate: day }),
      );
    }
  };

  handleDayMouseEnter = day => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState({
        mouseEnteredEndDate: day,
      });
    }
  };

  render() {
    const { className, size, ...others } = this.props;
    const { selectedStartDate, mouseEnteredEndDate } = this.state;
    const modifiers = { from: selectedStartDate, to: mouseEnteredEndDate };
    const selectedDays = [selectedStartDate, { from: selectedStartDate, to: mouseEnteredEndDate }];

    const classNames = cx(theme['date-picker'], theme['has-range'], theme[`is-${size}`], className);

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
