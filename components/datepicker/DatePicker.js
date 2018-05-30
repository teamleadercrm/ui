import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';

class DatePicker extends PureComponent {
  state = {
    selectedDate: this.props.selectedDate,
  };

  componentDidUpdate() {
    this.props.onChange({ selectedDate: this.state.selectedDate });
  }

  handleDayClick = day => {
    this.setState({ selectedDate: day });
  };

  render() {
    const { className, modifiers, size, ...others } = this.props;
    const { selectedDate } = this.state;

    const classNames = cx(theme['date-picker'], theme[`is-${size}`], className);

    return (
      <DayPicker
        className={classNames}
        classNames={theme}
        modifiers={convertModifiersToClassnames(modifiers, theme)}
        navbarElement={<NavigationBar size={size} />}
        onDayClick={this.handleDayClick}
        selectedDays={selectedDate}
        weekdayElement={<WeekDay size={size} />}
        {...others}
      />
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
