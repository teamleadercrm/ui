import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange } from './utils';
import { DateUtils } from 'react-day-picker/lib/src';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerRange extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    onChange: PropTypes.func,
    selectedDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  state = {
    from: null,
    to: null,
    enteredTo: null,
  };

  handleDayClick = (day) => {
    const { from, to } = this.state;

    if (from && to && day >= from && day <= to) {
      this.setState({
        from: null,
        to: null,
        enteredTo: null,
      });
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  };

  handleDayMouseEnter = (day) => {
    const { from, to } = this.state;

    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  };

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
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
        className={classNames}
        classNames={theme}
        modifiers={convertModifiersToClassnames(modifiers, theme)}
        navbarElement={<NavigationBar size={size} />}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
        selectedDays={selectedDays}
        weekdayElement={<WeekDay size={size} />}
        {...others}
      />
    );
  }
}

export default DatePickerRange;
