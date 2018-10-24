import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import HelpText from '../helptext';
import ErrorText from '../errorText';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class DatePickerInputRange extends PureComponent {
  state = {
    selectedStartDate: null,
    selectedEndDate: null,
    mouseEnteredEndDate: null,
    inputHasFocus: false,
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

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusFrom = () => {
    this.timeout = setTimeout(() => this.startDate.getInput().focus(), 100);
  };

  focusTo = () => {
    this.timeout = setTimeout(() => this.endDate.getInput().focus(), 0);
  };

  handleFromBlur = () => {
    this.setState({ inputHasFocus: false }, () => this.props.onStartDateBlur && this.props.onStartDateBlur());
  };

  handleFromFocus = () => {
    this.setState({ inputHasFocus: true }, () => this.props.onStartDateFocus && this.props.onStartDateFocus());
  };

  handleFromChange = day => {
    this.setState({ selectedStartDate: day }, () => {
      const { selectedEndDate } = this.state;
      this.focusTo();
      this.props.onChange({ selectedStartDate: day, selectedEndDate });
    });
  };

  handleToChange = day => {
    this.setState({ selectedEndDate: day, mouseEnteredEndDate: day }, () => {
      const { selectedStartDate } = this.state;
      this.showFromMonth();
      this.props.onChange({ selectedStartDate, selectedEndDate: day });
    });
  };

  handleToBlur = () => {
    this.setState({ inputHasFocus: false }, () => this.props.onEndDateBlur && this.props.onEndDateBlur());
  };

  handleToFocus = () => {
    this.setState({ inputHasFocus: true }, () => this.props.onEndDateFocus && this.props.onEndDateFocus());

    if (!this.state.selectedStartDate) {
      this.focusFrom();
    }
  };

  renderDayPickerInput = () => {
    const {
      className,
      dayPickerProps,
      dayPickerStartDateProps,
      dayPickerEndDateProps,
      dayPickerInputStartDateProps,
      dayPickerInputEndDateProps,
      disabled,
      inputProps,
      inputStartDateProps,
      inputEndDateProps,
      readOnly,
      size,
      ...others
    } = this.props;

    const { selectedStartDate, selectedEndDate, mouseEnteredEndDate } = this.state;

    const propsWithoutBoxProps = omitBoxProps(others);
    const dayPickerClassNames = cx(theme['date-picker'], theme['has-range'], theme[`is-${size}`], className);
    const dayPickerInputProps = omit(propsWithoutBoxProps, ['helpText', 'onBlur', 'onChange', 'onFocus']);

    const modifiers = { from: selectedStartDate, to: mouseEnteredEndDate };
    const selectedDays = [selectedStartDate, { from: selectedStartDate, to: mouseEnteredEndDate }];

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
      ...dayPickerInputProps,
    };

    const commonInputProps = {
      disabled: disabled || readOnly,
      ...inputProps,
    };

    return (
      <Fragment>
        <DayPickerInput
          dayPickerProps={{
            disabledDays: { after: selectedEndDate },
            toMonth: selectedEndDate,
            ...commonDayPickerProps,
            ...dayPickerStartDateProps,
          }}
          onDayChange={this.handleFromChange}
          inputProps={{
            onBlur: this.handleFromBlur,
            onFocus: this.handleFromFocus,
            ...commonInputProps,
            ...inputStartDateProps,
          }}
          ref={el => (this.startDate = el)}
          {...commonDayPickerInputProps}
          {...dayPickerInputStartDateProps}
        />
        <DayPickerInput
          dayPickerProps={{
            disabledDays: { before: selectedStartDate },
            month: selectedStartDate,
            fromMonth: selectedStartDate,
            onDayMouseEnter: this.handleDayMouseEnter,
            ...commonDayPickerProps,
            ...dayPickerEndDateProps,
          }}
          onDayChange={this.handleToChange}
          inputProps={{
            onBlur: this.handleToBlur,
            onFocus: this.handleToFocus,
            ...commonInputProps,
            ...inputEndDateProps,
          }}
          ref={el => (this.endDate = el)}
          {...commonDayPickerInputProps}
          {...dayPickerInputEndDateProps}
        />
      </Fragment>
    );
  };

  renderIcon = () => {
    const { inverse } = this.props;

    return (
      <Icon
        className={theme['input-icon']}
        color={inverse ? 'teal' : 'neutral'}
        tint={inverse ? 'light' : 'darkest'}
        marginHorizontal={2}
      >
        <IconCalendarSmallOutline />
      </Icon>
    );
  };

  showFromMonth = () => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (!selectedStartDate) {
      return;
    }

    this.endDate.getDayPicker().showMonth(DateUtils.addMonths(selectedEndDate, -1));
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
    const { bold, disabled, error, helpText, inverse, readOnly, size, ...others } = this.props;

    const boxProps = pickBoxProps(others);

    const classNames = cx(theme['date-picker-input-range'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: error,
      [theme['has-focus']]: this.state.inputHasFocus,
    });

    return (
      <Box className={classNames} {...boxProps}>
        <div className={theme['input-wrapper']}>
          {this.renderIcon()}
          {this.renderDayPickerInput()}
        </div>
        {error ? (
          <ErrorText inverse={inverse}>{error}</ErrorText>
        ) : (
          helpText && <HelpText inverse={inverse}>{helpText}</HelpText>
        )}
      </Box>
    );
  }
}

DatePickerInputRange.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  helpText: PropTypes.string,
  inverse: PropTypes.bool,
  inputProps: PropTypes.object,
  inputStartDateProps: PropTypes.object,
  inputEndDateProps: PropTypes.object,
  modifiers: PropTypes.object,
  dayPickerProps: PropTypes.object,
  dayPickerStartDateProps: PropTypes.object,
  dayPickerEndDateProps: PropTypes.object,
  dayPickerInputEndDateProps: PropTypes.object,
  dayPickerInputStartDateProps: PropTypes.object,
  /** Callback function that is fired when blurring the end date input field. */
  onEndDateBlur: PropTypes.func,
  /** Callback function that is fired when focussing the end date input field. */
  onEndDateFocus: PropTypes.func,
  /** Callback function that is fired when blurring the start date input field. */
  onStartDateBlur: PropTypes.func,
  /** Callback function that is fired when focussing the start date input field. */
  onStartDateFocus: PropTypes.func,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  selectedRange: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  inputStartDateValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  inputEndDateValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

DatePickerInputRange.defaultProps = {
  bold: false,
  disabled: false,
  inverse: false,
  readOnly: false,
  size: 'medium',
};

export default DatePickerInputRange;
