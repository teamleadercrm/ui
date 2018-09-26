import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';

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
    const { className, modifiers, size, ...others } = this.props;
    const { selectedDate } = this.state;

    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);
    const classNames = cx(theme['date-picker'], theme[`is-${size}`], className);

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
  className: PropTypes.string,
  modifiers: PropTypes.object,
  onChange: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePicker.defaultProps = {
  size: 'medium',
};

export default DatePicker;
