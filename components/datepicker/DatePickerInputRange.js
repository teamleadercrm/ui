import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import InputMetaPropTypes from '../input/InputMetaPropTypes';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline, IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
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
    this.setState({ inputHasFocus: false });
  };

  handleFromFocus = () => {
    this.setState({ inputHasFocus: true });
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
    this.setState({ inputHasFocus: false });
  };

  handleToFocus = () => {
    this.setState({ inputHasFocus: true });

    if (!this.state.selectedStartDate) {
      this.focusFrom();
    }
  };

  hasError = () => {
    const { meta } = this.props;
    return Boolean(meta && meta.error && meta.touched);
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

    const dayPickerClassNames = cx(theme['date-picker'], theme['has-range'], theme[`is-${size}`], className);
    const dayPickerInputProps = omit(others, ['helpText', 'meta', 'onBlur', 'onChange', 'onFocus']);

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
    const { bold, disabled, inverse, readOnly, size, ...others } = this.props;

    const boxProps = pickBoxProps(others);

    const classNames = cx(theme['date-picker-input-range'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: this.hasError(),
      [theme['has-focus']]: this.state.inputHasFocus,
    });

    return (
      <Box className={classNames} {...boxProps}>
        <div className={theme['input-wrapper']}>
          {this.renderIcon()}
          {this.renderDayPickerInput()}
        </div>
        {this.hasError() ? this.renderValidationMessage() : this.renderHelpText()}
      </Box>
    );
  }
}

DatePickerInputRange.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  inverse: PropTypes.bool,
  inputProps: PropTypes.object,
  inputStartDateProps: PropTypes.object,
  inputEndDateProps: PropTypes.object,
  meta: InputMetaPropTypes,
  modifiers: PropTypes.object,
  dayPickerProps: PropTypes.object,
  dayPickerStartDateProps: PropTypes.object,
  dayPickerEndDateProps: PropTypes.object,
  dayPickerInputEndDateProps: PropTypes.object,
  dayPickerInputStartDateProps: PropTypes.object,
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
