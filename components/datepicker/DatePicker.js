import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import cx from 'classnames';
import theme from './theme.css';

class DatePicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.object,
    range: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    range: false,
    size: 'medium',
  };

  convertModifiersToClassnames(modifiers) {
    if (!modifiers) {
      return;
    }

    const convertedModifiers = {};

    Object.keys(modifiers).forEach(key => {
      convertedModifiers[theme[key]] = modifiers[key];
    });

    return convertedModifiers;
  }

  render() {
    const { className, modifiers, range, size, ...others } = this.props;

    const classNames = cx(
      theme['date-picker'],
      theme[`is-${size}`],
      {
        [theme['has-range']]: range,
      },
      className,
    );

    return (
      <DayPicker
        className={classNames}
        classNames={theme}
        modifiers={this.convertModifiersToClassnames(modifiers)}
        navbarElement={<NavigationBar size={size} />}
        weekdayElement={<WeekDay size={size} />}
        {...others}
      />
    );
  }
}

export default DatePicker;
