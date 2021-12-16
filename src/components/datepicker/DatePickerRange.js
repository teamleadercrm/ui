import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import LocaleUtils from './localeUtils';

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

  handleDayClick = (day, modifiers = {}) => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (modifiers.disabled) {
      return;
    }

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

  handleDayMouseEnter = (day) => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState({
        mouseEnteredEndDate: day,
      });
    }
  };

  render() {
    const { bordered, className, style, size, ...others } = this.props;
    const { selectedStartDate, mouseEnteredEndDate } = this.state;
    const modifiers = { from: selectedStartDate, to: mouseEnteredEndDate };
    const selectedDays = [selectedStartDate, { from: selectedStartDate, to: mouseEnteredEndDate }];

    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);
    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['date-picker'],
      theme['has-range'],
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
          localeUtils={LocaleUtils}
          className={classNames}
          style={style}
          classNames={theme}
          modifiers={convertModifiersToClassnames(modifiers, theme)}
          navbarElement={<NavigationBar size={size} />}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
          selectedDays={selectedDays}
          weekdayElement={<WeekDay size={size} />}
        />
      </Box>
    );
  }
}

DatePickerRange.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the DatePickerRange to give custom styles. */
  className: PropTypes.string,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** The current selected range. */
  selectedRange: PropTypes.object,
  /** Size of the DatePickerRange component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePickerRange.defaultProps = {
  bordered: false,
  size: 'medium',
};

export default DatePickerRange;
