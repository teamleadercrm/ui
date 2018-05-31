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
    from: null,
    to: null,
    enteredTo: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.selectedRange !== undefined &&
      (props.selectedRange.from !== state.from || props.selectedRange.to !== state.to)
    ) {
      return {
        from: props.selectedRange.from,
        to: props.selectedRange.to,
        enteredTo: props.selectedRange.to,
      };
    }

    return null;
  }

  handleDayClick = day => {
    const { from, to } = this.state;

    if (isSelectingFirstDay(from, to, day)) {
      this.setState(
        {
          from: day,
          to: null,
          enteredTo: null,
        },
        () => this.props.onChange({ from: day, to: null }),
      );
    } else {
      this.setState(
        {
          to: day,
          enteredTo: day,
        },
        () => this.props.onChange({ from, to: day }),
      );
    }
  };

  handleDayMouseEnter = day => {
    const { from, to } = this.state;

    if (!isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  };

  render() {
    const { className, size, ...others } = this.props;
    const { from, enteredTo } = this.state;
    const modifiers = { from, to: enteredTo };
    const selectedDays = [from, { from, to: enteredTo }];

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
