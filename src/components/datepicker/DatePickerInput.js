import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import ValidationText from '../validationText';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';
import utils from '@teamleader/ui-utilities';

class DatePickerInput extends PureComponent {
  state = {
    inputHasFocus: false,
    selectedDate: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedDate !== undefined && props.selectedDate !== state.selectedDate) {
      return {
        selectedDate: props.selectedDate,
      };
    }

    return null;
  }

  handleBlur = () => {
    this.setState({ inputHasFocus: false }, () => this.props.onBlur && this.props.onBlur());
  };

  handleFocus = () => {
    this.setState({ inputHasFocus: true }, () => this.props.onFocus && this.props.onFocus());
  };

  handleInputDateChange = (date, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }
    this.setState({ selectedDay: date }, () => this.props.onChange(date));
  };

  renderDayPickerInput = () => {
    const { className, dayPickerProps, disabled, inputProps, modifiers, readOnly, size, ...others } = this.props;
    const { selectedDate } = this.state;

    const dayPickerClassNames = cx(theme['date-picker'], utils['reset-font-smoothing'], theme[`is-${size}`], className);

    const propsWithoutBoxProps = omitBoxProps(others);
    const restProps = omit(propsWithoutBoxProps, ['helpText', 'onBlur', 'onChange', 'onFocus', 'inputProps']);

    return (
      <DayPickerInput
        classNames={theme}
        dayPickerProps={{
          className: dayPickerClassNames,
          classNames: theme,
          modifiers: convertModifiersToClassnames(modifiers, theme),
          selectedDays: selectedDate,
          navbarElement: <NavigationBar size={size} />,
          weekdayElement: <WeekDay size={size} />,
          ...dayPickerProps,
        }}
        onDayChange={this.handleInputDateChange}
        hideOnDayClick={false}
        inputProps={{
          disabled: disabled || readOnly,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          ...inputProps,
        }}
        {...restProps}
      />
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

  render() {
    const { bold, disabled, error, helpText, inverse, readOnly, size, warning, width, ...others } = this.props;
    const { inputHasFocus } = this.state;

    const boxProps = pickBoxProps(others);

    const classNames = cx(theme['date-picker-input'], utils['reset-font-smoothing'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: error,
      [theme['has-focus']]: inputHasFocus,
      [theme['has-warning']]: warning,
    });

    return (
      <Box className={classNames} {...boxProps}>
        <div className={theme['input-wrapper']} style={{ width }}>
          {this.renderIcon()}
          {this.renderDayPickerInput()}
        </div>
        <ValidationText error={error} help={helpText} inverse={inverse} warning={warning} />
      </Box>
    );
  }
}

DatePickerInput.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  dayPickerProps: PropTypes.object,
  disabled: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  helpText: PropTypes.string,
  inputProps: PropTypes.object,
  inverse: PropTypes.bool,
  modifiers: PropTypes.object,
  /** Callback function that is fired when blurring the input field. */
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  /** Callback function that is fired when focussing the input field. */
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
  selectedDate: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** The text to use as warning message below the input. */
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A custom width for the input field */
  width: PropTypes.string,
};

DatePickerInput.defaultProps = {
  bold: false,
  disabled: false,
  inverse: false,
  readOnly: false,
  size: 'medium',
  width: '110px',
};

export default DatePickerInput;
