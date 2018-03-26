import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';

class DatePicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    onChange: PropTypes.func,
    selectedDate: PropTypes.instanceOf(Date),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  state = {
    selectedDate: null,
  };

  componentWillMount() {
    const { selectedDate } = this.props;

    if (selectedDate) {
      this.setState({ selectedDate });
    }
  }

  handleDayClick = day => {
    this.setState(
      {
        selectedDate: day,
      },
      this.props.onChange({ selectedDate: day }),
    );
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

export default DatePicker;
