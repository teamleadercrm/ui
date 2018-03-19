import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange } from './utils';
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

    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusTo() {
    // Focus to `to` field. A timeout is required here because the overlays
    // already set timeouts to work well with input fields
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from }, () => {
      if (!this.state.to) {
        this.focusTo();
      }
    });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  showFromMonth() {
    const { from, to } = this.state;

    if (!from) {
      return;
    }

    this.props.onChange(this.state);

    // if (moment(to).diff(moment(from), 'months') < 2) {
    this.to.getDayPicker().showMonth(from);
    // }
  }

  render() {
    const { className, dayPickerProps, size, ...others } = this.props;
    const { from, to } = this.state;
    const modifiers = { from, to };
    const selectedDays = [from, { from, to }];

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
            value={from}
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
              ...dayPickerProps,
            }}
            onDayChange={this.handleToChange}
            ref={el => (this.to = el)}
            value={to}
            {...commonDayPickerInputProps}
            {...others}
          />
        </div>
      </Box>
    );
  }
}

export default DatePickerInputRange;
