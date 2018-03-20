import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerInputRange extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    dayPickerProps: PropTypes.object,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  constructor() {
    super(...arguments);

    this.handleFromChange = ::this.handleFromChange;
    this.handleToChange = ::this.handleToChange;
    this.handleDayMouseEnter = ::this.handleDayMouseEnter;

    this.state = {
      from: null,
      to: null,
      enteredTo: null,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusFrom() {
    this.timeout = setTimeout(() => this.from.getInput().focus(), 100);
  }

  focusTo() {
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }

  handleFromChange(day) {
    this.setState({ from: day }, () => {
      if (!this.state.to) {
        this.focusTo();
      }
    });
  }

  handleToChange(day) {
    this.setState({ to: day, enteredTo: day }, () => {
      const { from, to } = this.state;
      this.showFromMonth();
      this.props.onChange({ from, to });
    });
  }

  handleToFocus = () => {
    if (!this.state.from) {
      this.focusFrom();
    }
  };

  showFromMonth() {
    const { from, to } = this.state;

    if (!from) {
      return;
    }

    this.to.getDayPicker().showMonth(DateUtils.addMonths(to, -1));
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;

    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  render() {
    const { className, dayPickerProps, size, ...others } = this.props;
    const { from, to, enteredTo } = this.state;
    const modifiers = { from, to: enteredTo };
    const selectedDays = [from, { from, to: enteredTo }];

    const classNames = cx(theme['date-picker-input-range'], theme[`is-${size}`]);

    const dayPickerClassNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: hasRange(selectedDays),
      },
      className,
    );

    const commonDayPickerProps = {
      className: dayPickerClassNames,
      classNames: theme,
      modifiers: convertModifiersToClassnames(modifiers, theme),
      selectedDays,
      navbarElement: <NavigationBar size={size} />,
      weekdayElement: <WeekDay size={size} />,
    };

    const commonDayPickerInputProps = {
      classNames: theme,
      hideOnDayClick: false,
    };

    return (
      <Box className={classNames}>
        <div className={theme['input-wrapper']}>
          <Icon className={theme['input-icon']} color="teal" tint="darkest" marginHorizontal={2}>
            <IconCalendarSmallOutline />
          </Icon>
          <DayPickerInput
            dayPickerProps={{
              ...commonDayPickerProps,
              disabledDays: { after: to },
              toMonth: to,
              ...dayPickerProps,
            }}
            onDayChange={this.handleFromChange}
            ref={el => (this.from = el)}
            {...commonDayPickerInputProps}
            {...others}
          />
          {` - `}
          <DayPickerInput
            dayPickerProps={{
              ...commonDayPickerProps,
              disabledDays: { before: from },
              month: from,
              fromMonth: from,
              onDayMouseEnter: this.handleDayMouseEnter,
              ...dayPickerProps,
            }}
            onDayChange={this.handleToChange}
            inputProps={{
              onFocus: this.handleToFocus,
            }}
            ref={el => (this.to = el)}
            {...commonDayPickerInputProps}
            {...others}
          />
        </div>
      </Box>
    );
  }
}

export default DatePickerInputRange;
