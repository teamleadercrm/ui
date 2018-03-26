import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerInput extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    dayPickerProps: PropTypes.object,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    inverse: PropTypes.bool,
    modifiers: PropTypes.object,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
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

  render() {
    const {
      bold,
      className,
      dayPickerProps,
      disabled,
      helpText,
      inverse,
      modifiers,
      readOnly,
      size,
      ...others
    } = this.props;

    const { inputHasFocus, selectedDate } = this.state;

    const classNames = cx(theme['date-picker-input'], theme[`is-${size}`], {
      [theme['is-bold']]: bold,
      [theme['is-disabled']]: disabled,
      [theme['is-inverse']]: inverse,
      [theme['is-read-only']]: readOnly,
      [theme['has-focus']]: inputHasFocus,
    });

    const dayPickerClassNames = cx(theme['date-picker'], theme[`is-${size}`], className);

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

export default DatePickerInput;
