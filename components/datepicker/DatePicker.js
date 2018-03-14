import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange } from './utils';
import cx from 'classnames';
import theme from './theme.css';

class DatePicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    selectedDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { className, modifiers, selectedDays, size, ...others } = this.props;

    const classNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: hasRange(selectedDays),
      },
      className,
    );

    return (
      <DayPicker
        className={classNames}
        classNames={theme}
        modifiers={convertModifiersToClassnames(modifiers, theme)}
        navbarElement={<NavigationBar size={size} />}
        selectedDays={selectedDays}
        weekdayElement={<WeekDay size={size} />}
        {...others}
      />
    );
  }
}

export default DatePicker;
