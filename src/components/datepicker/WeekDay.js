import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class WeekDay extends PureComponent {
  render() {
    const { weekday, className, localeUtils, locale, size } = this.props;
    const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);

    return (
      <div className={className} title={weekdayName}>
        {weekdayName.slice(0, size === 'large' ? 2 : 1)}
      </div>
    );
  }
}

WeekDay.propTypes = {
  className: PropTypes.string,
  locale: PropTypes.string,
  localeUtils: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  weekday: PropTypes.number,
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
