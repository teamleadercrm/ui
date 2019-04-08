import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import FullNavigationBar from './FullNavigationBar';
import WeekDay from './WeekDay';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import { convertModifiersToClassnames } from './utils';

class YearPicker extends PureComponent {
  handleClickToday = () => {
    console.log('today');
  };

  render() {
    const { bordered, className, modifiers, size, ...others } = this.props;
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
        <Box padding={5} className={theme['year-container']}>
          <DayPicker
            {...restProps}
            month={new Date(new Date().getFullYear(), 0)}
            className={classNames}
            classNames={theme}
            numberOfMonths={12}
            pagedNavigation
            modifiers={convertModifiersToClassnames(modifiers, theme)}
            navbarElement={<FullNavigationBar size={size} handleClickToday={this.handleClickToday()} />}
            weekdayElement={<WeekDay size={size} />}
            bordered={false}
          />
        </Box>
      </Box>
    );
  }
}

YearPicker.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the DatePicker to give custom styles. */
  className: PropTypes.string,
  /** The modifiers of the DatePicker component. */
  modifiers: PropTypes.object,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the DatePicker component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

YearPicker.defaultProps = {
  bordered: false,
  size: 'medium',
};

export default YearPicker;
