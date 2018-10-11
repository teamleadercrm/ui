import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { ErrorText, HelpText } from '../../components';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

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

  handleInputDateChange = date => {
    this.setState({ selectedDate: date }, () => this.props.onChange(date));
  };

  renderDayPickerInput = () => {
    const { className, dayPickerProps, disabled, modifiers, readOnly, size, ...others } = this.props;
    const { selectedDate } = this.state;

    const dayPickerClassNames = cx(theme['date-picker'], theme[`is-${size}`], className);

    const propsWithoutBoxProps = omitBoxProps(others);
    const restProps = omit(propsWithoutBoxProps, ['helpText', 'onBlur', 'onChange', 'onFocus']);

    return (
      <DayPickerInput
        classNames={theme}
        dayPickerProps={{
          className: dayPickerClassNames,
          classNames: theme,
          modifiers: convertModifiersToClassnames(modifiers, theme),
          onDayClick: this.handleInputDateChange,
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
    const { bold, disabled, error, helpText, inverse, readOnly, size, ...others } = this.props;
    const { inputHasFocus } = this.state;

    const boxProps = pickBoxProps(others);

    const classNames = cx(theme['date-picker-input'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: error,
      [theme['has-focus']]: inputHasFocus,
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

DatePickerInput.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  dayPickerProps: PropTypes.object,
  disabled: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  helpText: PropTypes.string,
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
};

DatePickerInput.defaultProps = {
  bold: false,
  disabled: false,
  inverse: false,
  readOnly: false,
  size: 'medium',
};

export default DatePickerInput;
