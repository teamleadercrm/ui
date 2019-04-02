import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class DatePicker extends PureComponent {
  state = {
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

  handleDayClick = day => {
    this.setState(
      {
        selectedDate: day,
      },
      () => this.props.onChange(day),
    );
  };

  render() {
    const { bordered, className, modifiers, size, ...others } = this.props;
    const { selectedDate } = this.state;
    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);
    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['date-picker'],
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
          className={classNames}
          classNames={theme}
          modifiers={convertModifiersToClassnames(modifiers, theme)}
          navbarElement={<NavigationBar size={size} />}
          onDayClick={this.handleDayClick}
          selectedDays={selectedDate}
          weekdayElement={<WeekDay size={size} />}
        />
      </Box>
    );
  }
}

DatePicker.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  modifiers: PropTypes.object,
  onChange: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePicker.defaultProps = {
  bordered: false,
  size: 'medium',
};

export default DatePicker;
