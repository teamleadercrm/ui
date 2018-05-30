import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import InputMetaPropTypes from '../input/InputMetaPropTypes';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import { IconCalendarSmallOutline, IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class DatePickerInput extends PureComponent {
  state = {
    inputHasFocus: false,
    selectedDate: null,
  };

  componentWillMount() {
    const { selectedDate } = this.props;

    if (selectedDate) {
      this.setState({ selectedDate });
    }
  }

  handleBlur = () => {
    this.setState({ inputHasFocus: false });
  };

  handleFocus = () => {
    this.setState({ inputHasFocus: true });
  };

  handleDayClick = day => {
    this.setState(
      {
        selectedDate: day,
      },
      this.props.onChange({ selectedDate: day }),
    );
  };

  hasError = () => {
    const { meta } = this.props;
    return Boolean(meta && meta.error && meta.touched);
  };

  renderDayPickerInput = () => {
    const { className, dayPickerProps, disabled, modifiers, readOnly, size, ...others } = this.props;
    const { selectedDate } = this.state;

    const dayPickerClassNames = cx(theme['date-picker'], theme[`is-${size}`], className);

    const rest = omit(others, ['helpText', 'meta', 'onBlur', 'onChange', 'onFocus']);

    return (
      <DayPickerInput
        classNames={theme}
        dayPickerProps={{
          className: dayPickerClassNames,
          classNames: theme,
          modifiers: convertModifiersToClassnames(modifiers, theme),
          onDayClick: this.handleDayClick,
          selectedDays: selectedDate,
          navbarElement: <NavigationBar size={size} />,
          weekdayElement: <WeekDay size={size} />,
          ...dayPickerProps,
        }}
        hideOnDayClick={false}
        inputProps={{
          disabled: disabled || readOnly,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
        }}
        {...rest}
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

  render() {
    const { bold, disabled, inverse, readOnly, size } = this.props;
    const { inputHasFocus } = this.state;

    const classNames = cx(theme['date-picker-input'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-error']]: this.hasError(),
      [theme['has-focus']]: inputHasFocus,
    });

    return (
      <Box className={classNames}>
        <div className={theme['input-wrapper']}>
          {this.renderIcon()}
          {this.renderDayPickerInput()}
        </div>
        {this.hasError() ? this.renderValidationMessage() : this.renderHelpText()}
      </Box>
    );
  }
}

DatePickerInput.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  dayPickerProps: PropTypes.object,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  inverse: PropTypes.bool,
  meta: InputMetaPropTypes,
  modifiers: PropTypes.object,
  onChange: PropTypes.func,
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
