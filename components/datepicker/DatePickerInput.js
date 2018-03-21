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

class DatePickerInput extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    modifiers: PropTypes.object,
    dayPickerProps: PropTypes.object,
    readOnly: PropTypes.bool,
    selectedDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    bold: false,
    disabled: false,
    readOnly: false,
    size: 'medium',
  };

  state = {
    inputHasFocus: false,
  };

  handleBlur = () => {
    this.setState({ inputHasFocus: false });
  };

  handleFocus = () => {
    this.setState({ inputHasFocus: true });
  };

  render() {
    const {
      bold,
      className,
      dayPickerProps,
      disabled,
      modifiers,
      selectedDays,
      readOnly,
      size,
      ...others
    } = this.props;

    const classNames = cx(theme['date-picker-input'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-read-only']]: readOnly,
      [theme['has-focus']]: this.state.inputHasFocus,
    });

    const dayPickerClassNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: hasRange(selectedDays),
      },
      className,
    );

    return (
      <Box className={classNames}>
        <div className={theme['input-wrapper']}>
          <Icon className={theme['input-icon']} color="teal" tint="darkest" marginHorizontal={2}>
            <IconCalendarSmallOutline />
          </Icon>
          <DayPickerInput
            classNames={theme}
            dayPickerProps={{
              className: dayPickerClassNames,
              classNames: theme,
              modifiers: convertModifiersToClassnames(modifiers, theme),
              selectedDays,
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
            {...others}
          />
        </div>
      </Box>
    );
  }
}

export default DatePickerInput;
