import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import InputMetaPropTypes from '../input/InputMetaPropTypes';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange, isSelectingFirstDay } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline, IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class DatePickerInputRange extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    inverse: PropTypes.bool,
    meta: InputMetaPropTypes,
    modifiers: PropTypes.object,
    dayPickerProps: PropTypes.object,
    dayPickerFromProps: PropTypes.object,
    dayPickerToProps: PropTypes.object,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    selectedRange: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    valueFrom: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    valueTo: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
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

    if (selectedRange && selectedRange.from && selectedRange.to) {
      this.setState({
        from: selectedRange.from,
        to: selectedRange.to,
        enteredTo: selectedRange.to,
      });
    }
  }

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

  hasError = () => {
    const { meta } = this.props;
    return Boolean(meta && meta.error && meta.touched);
  };

  renderHelpText = () => {
    const { helpText, inverse } = this.props;

    if (helpText) {
      return (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      );
    }
  };

  renderValidationMessage = () => {
    return (
      <Box marginTop={2}>
        <IconWarningBadgedSmallFilled className={theme['validation-icon']} />
        <TextSmall className={theme['validation-text']} element="span" marginLeft={1}>
          {this.props.meta.error}
        </TextSmall>
      </Box>
    );
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
    const {
      bold,
      className,
      dayPickerProps,
      dayPickerFromProps,
      dayPickerToProps,
      disabled,
      inverse,
      readOnly,
      size,
      valueFrom,
      valueTo,
      ...others
    } = this.props;
    const { from, to, enteredTo, inputHasFocus } = this.state;
    const modifiers = { from, to: enteredTo };
    const selectedDays = [from, { from, to: enteredTo }];

    const classNames = cx(theme['date-picker-input-range'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: this.hasError(),
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

    const rest = omit(others, ['helpText', 'meta', 'onBlur', 'onChange', 'onFocus']);

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
              ...dayPickerFromProps,
            }}
            onDayChange={this.handleFromChange}
            inputProps={{
              disabled: disabled || readOnly,
              onBlur: this.handleFromBlur,
              onFocus: this.handleFromFocus,
            }}
            ref={el => (this.from = el)}
            value={valueFrom}
            {...commonDayPickerInputProps}
            {...rest}
          />
          <DayPickerInput
            dayPickerProps={{
              disabledDays: { before: from },
              month: from,
              fromMonth: from,
              onDayMouseEnter: this.handleDayMouseEnter,
              ...commonDayPickerProps,
              ...dayPickerToProps,
            }}
            onDayChange={this.handleToChange}
            inputProps={{
              disabled: disabled || readOnly,
              onBlur: this.handleToBlur,
              onFocus: this.handleToFocus,
            }}
            ref={el => (this.to = el)}
            value={valueTo}
            {...commonDayPickerInputProps}
            {...rest}
          />
        </div>
        {this.hasError() ? this.renderValidationMessage() : this.renderHelpText()}
      </Box>
    );
  }
}

export default DatePickerInputRange;
