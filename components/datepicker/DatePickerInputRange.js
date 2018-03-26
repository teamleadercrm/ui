import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange, isSelectingFirstDay } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerInputRange extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    inverse: PropTypes.bool,
    modifiers: PropTypes.object,
    dayPickerProps: PropTypes.object,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    selectedRange: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    bold: false,
    disabled: false,
    inverse: false,
    readOnly: false,
    size: 'medium',
  };

  state = {
    from: null,
    to: null,
    enteredTo: null,
    inputHasFocus: false,
  };

  componentWillMount() {
    const { selectedRange } = this.props;

    if(selectedRange && selectedRange.from && selectedRange.to) {
      this.setState({
        from: selectedRange.from,
        to: selectedRange.to,
        enteredTo: selectedRange.to,
      });
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusFrom = () => {
    this.timeout = setTimeout(() => this.from.getInput().focus(), 100);
  };

  focusTo = () => {
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  };

  handleFromBlur = () => {
    this.setState({ inputHasFocus: false });
  };

  handleFromFocus = () => {
    this.setState({ inputHasFocus: true });
  };

  handleFromChange = day => {
    this.setState({ from: day }, () => {
      if (!this.state.to) {
        this.focusTo();
      }
    });
  };

  handleToChange = day => {
    this.setState({ to: day, enteredTo: day }, () => {
      const { from, to } = this.state;
      this.showFromMonth();
      this.props.onChange({ from, to });
    });
  };

  handleToBlur = () => {
    this.setState({ inputHasFocus: false });
  };

  handleToFocus = () => {
    this.setState({ inputHasFocus: true });

    if (!this.state.from) {
      this.focusFrom();
    }
  };

  showFromMonth = () => {
    const { from, to } = this.state;

    if (!from) {
      return;
    }

    this.to.getDayPicker().showMonth(DateUtils.addMonths(to, -1));
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
    const { bold, className, dayPickerProps, disabled, helpText, inverse, readOnly, size, ...others } = this.props;
    const { from, to, enteredTo, inputHasFocus } = this.state;
    const modifiers = { from, to: enteredTo };
    const selectedDays = [from, { from, to: enteredTo }];

    const classNames = cx(theme['date-picker-input-range'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-focus']]: inputHasFocus,
    });

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
      ...dayPickerProps,
    };

    const commonDayPickerInputProps = {
      classNames: theme,
      hideOnDayClick: false,
    };

    return (
      <Box className={classNames}>
        <div className={theme['input-wrapper']}>
          <Icon
            className={theme['input-icon']}
            color={inverse ? 'teal' : 'neutral'}
            tint={inverse ? 'light' : 'darkest'}
            marginHorizontal={2}
          >
            <IconCalendarSmallOutline />
          </Icon>
          <DayPickerInput
            dayPickerProps={{
              disabledDays: { after: to },
              toMonth: to,
              ...commonDayPickerProps,
            }}
            onDayChange={this.handleFromChange}
            inputProps={{
              disabled: disabled || readOnly,
              onBlur: this.handleFromBlur,
              onFocus: this.handleFromFocus,
            }}
            ref={el => (this.from = el)}
            {...commonDayPickerInputProps}
            {...others}
          />
          <DayPickerInput
            dayPickerProps={{
              disabledDays: { before: from },
              month: from,
              fromMonth: from,
              onDayMouseEnter: this.handleDayMouseEnter,
              ...commonDayPickerProps,
            }}
            onDayChange={this.handleToChange}
            inputProps={{
              disabled: disabled || readOnly,
              onBlur: this.handleToBlur,
              onFocus: this.handleToFocus,
            }}
            ref={el => (this.to = el)}
            {...commonDayPickerInputProps}
            {...others}
          />
        </div>
        {helpText && (
          <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
            {helpText}
          </TextSmall>
        )}
      </Box>
    );
  }
}

export default DatePickerInputRange;
