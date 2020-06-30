import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import DatePicker from '../datepicker';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import LocaleUtils, { formatDate } from './localeUtils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';

class DatePickerInput extends PureComponent {
  state = {
    isPopoverActive: false,
    popoverAnchorEl: null,
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

  getFormattedDate = () => {
    const { formatDate: customFormatDate, locale } = this.props;
    const { selectedDate } = this.state;

    if (!selectedDate) {
      return '';
    }

    if (!customFormatDate) {
      return formatDate(selectedDate, locale);
    }

    return customFormatDate(selectedDate, locale);
  };

  handleInputFocus = (event) => {
    const { onFocus, readOnly } = this.props.inputProps;

    if (readOnly) {
      return;
    }

    this.setState(
      {
        popoverAnchorEl: event.currentTarget,
        isPopoverActive: true,
      },
      () => onFocus && onFocus(),
    );
  };

  handlePopoverClose = () => {
    this.setState({ isPopoverActive: false });
  };

  handleDatePickerDateChange = (date) => {
    this.setState({ isPopoverActive: false, selectedDay: date }, () => this.props.onChange(date));
  };

  renderIcon = () => {
    const inverse = this.props.inputProps && this.props.inputProps.inverse;

    return (
      <Icon color={inverse ? 'teal' : 'neutral'} tint={inverse ? 'light' : 'darkest'} marginRight={2}>
        <IconCalendarSmallOutline />
      </Icon>
    );
  };

  render() {
    const {
      bordered,
      className,
      dayPickerProps,
      footer,
      inverse,
      inputProps,
      locale,
      popoverProps,
      size,
      inputSize,
      datePickerSize,
      ...others
    } = this.props;
    const { isPopoverActive, popoverAnchorEl, selectedDate } = this.state;
    const boxProps = pickBoxProps(others);
    const datePickerClassNames = cx(theme['date-picker-input'], theme[`is-${datePickerSize || size}`]);

    return (
      <Box className={className} {...boxProps}>
        <Input
          inverse={inverse}
          onFocus={this.handleInputFocus}
          prefix={this.renderIcon()}
          size={inputSize || size}
          value={this.getFormattedDate()}
          width="120px"
          noInputStyling={dayPickerProps && dayPickerProps.withMonthPicker}
          {...inputProps}
        />
        <Popover
          active={isPopoverActive}
          anchorEl={popoverAnchorEl}
          backdrop="transparent"
          fullWidth
          onEscKeyDown={this.handlePopoverClose}
          onOverlayClick={this.handlePopoverClose}
          position="end"
          offsetCorrection={30}
          zIndex={500}
          {...popoverProps}
        >
          <Box overflowY="auto">
            <DatePicker
              bordered={bordered}
              className={datePickerClassNames}
              locale={locale}
              localeUtils={LocaleUtils}
              month={selectedDate}
              onChange={this.handleDatePickerDateChange}
              selectedDate={selectedDate}
              size={datePickerSize || size}
              {...dayPickerProps}
            />
          </Box>
          {footer && (
            <Box
              backgroundColor="neutral"
              backgroundTint="light"
              borderColor="neutral"
              borderTint="normal"
              borderTopWidth={1}
              flex="1 0 auto"
              overflowX="hidden"
              paddingHorizontal={3}
              paddingVertical={3}
            >
              {footer}
            </Box>
          )}
        </Popover>
      </Box>
    );
  }
}

DatePickerInput.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Object with props for the DatePicker component. */
  dayPickerProps: PropTypes.object,
  /** A footer component, rendered at the bottom of the date picker */
  footer: PropTypes.any,
  /** A custom function to format a date. */
  formatDate: PropTypes.func,
  /** Object with props for the Input component. */
  inputProps: PropTypes.object,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale: PropTypes.string,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** Object with props for the Popover component. */
  popoverProps: PropTypes.object,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the Input & DatePicker components. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Overridable size of the Input component. */
  inputSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Overridable size of the DatePicker component. */
  datePickerSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePickerInput.defaultProps = {
  bordered: false,
  dayPickerProps: {},
  inputProps: {},
  inverse: false,
  locale: 'en-GB',
  popoverProps: {},
  size: 'medium',
};

export default DatePickerInput;
