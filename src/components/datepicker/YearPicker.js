import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import FullNavigationBar from './FullNavigationBar';
import WeekDay from './WeekDay';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import LocaleUtils from './localeUtils';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';

class YearPicker extends PureComponent {
  state = {
    displayedMonth: new Date(new Date().getFullYear(), 0),
    selectedStartDate: null,
    selectedEndDate: null,
    mouseEnteredEndDate: null,
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

  handleDayClick = day => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState({
        selectedStartDate: day,
        selectedEndDate: null,
        mouseEnteredEndDate: null,
      });
    } else {
      this.setState({
        selectedEndDate: day,
        mouseEnteredEndDate: day,
      });
    }
  };

  handleDayMouseEnter = day => {
    const { selectedStartDate, selectedEndDate } = this.state;

    if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
      this.setState({
        mouseEnteredEndDate: day,
      });
    }
  };

  handleClickToday = () => {
    this.setState({ displayedMonth: new Date(new Date().getFullYear(), 0) });
  };

  handleClickPrevious = () => {
    const currentMonth = this.state.displayedMonth;
    currentMonth.setMonth(currentMonth.getMonth() - 12);
    this.setState({ displayedMonth: currentMonth });
  };

  handleClickNext = () => {
    const currentMonth = this.state.displayedMonth;
    currentMonth.setMonth(currentMonth.getMonth() + 12);
    this.setState({ displayedMonth: currentMonth });
  };

  render() {
    const { bordered, className, locale, showNavigationBar, size, ...others } = this.props;
    const { displayedMonth, mouseEnteredEndDate, selectedStartDate } = this.state;
    const modifiers = { from: selectedStartDate, to: mouseEnteredEndDate };
    const selectedDays = [selectedStartDate, { from: selectedStartDate, to: mouseEnteredEndDate }];

    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['date-picker'],
      theme['has-range'],
      theme[`is-${size}`],
      {
        [theme['is-bordered']]: bordered,
      },
      className,
    );

    return (
      <Box {...boxProps}>
        <DayPicker
          {...restProps}
          month={displayedMonth}
          className={classNames}
          classNames={theme}
          locale={locale}
          localeUtils={LocaleUtils}
          modifiers={convertModifiersToClassnames(modifiers, theme)}
          numberOfMonths={12}
          pagedNavigation
          navbarElement={
            showNavigationBar ? (
              <FullNavigationBar
                size={size}
                onClickToday={this.handleClickToday}
                onClickNext={this.handleClickNext}
                onClickPrevious={this.handleClickPrevious}
                month={displayedMonth}
              />
            ) : (
              undefined
            )
          }
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
          selectedDays={selectedDays}
          weekdayElement={<WeekDay size={size} />}
          bordered={false}
        />
      </Box>
    );
  }
}

YearPicker.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the DatePicker to give custom styles. */
  className: PropTypes.string,
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale: PropTypes.string,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** The current selected range. */
  selectedRange: PropTypes.object,
  /** If true we render a navigation bar. */
  showNavigationBar: PropTypes.bool,
  /** Size of the DatePicker component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

YearPicker.defaultProps = {
  bordered: false,
  size: 'medium',
};

export default YearPicker;
