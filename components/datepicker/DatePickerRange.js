import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, hasRange } from './utils';
import { DateUtils } from 'react-day-picker/lib/src';
import cx from 'classnames';
import theme from './theme.css';

class DatePickerRange extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    onChange: PropTypes.func,
    selectedDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  constructor() {
    super(...arguments);

    this.handleDayClick = ::this.handleDayClick;

    this.state = {
      from: null,
      to: null,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range, () => {
      this.props.onChange(this.state);
    });
  }

  render() {
    const { className, size, ...others } = this.props;
    const { from, to } = this.state;
    const modifiers = { from, to };
    const selectedDays = [from, { from, to }];

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
        onDayClick={this.handleDayClick}
        selectedDays={selectedDays}
        weekdayElement={<WeekDay size={size} />}
        {...others}
      />
    );
  }
}

export default DatePickerRange;
