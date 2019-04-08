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
import { Heading2 } from '../..';

class YearPicker extends PureComponent {
  state = {
    currentYear: null,
    selectedDate: null,
  };

  componentDidMount() {
    const january = new Date(new Date().getFullYear(), 0, 1);
    this.setState({ selectedDate: january });
  }

  render() {
    const { className, modifiers, size, ...others } = this.props;
    const { currentYear, selectedDate } = this.state;
    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);
    const classNames = cx(uiUtilities['reset-font-smoothing'], theme['date-picker'], theme[`is-${size}`], className);

    return (
      <Box {...boxProps}>
        <Box padding={3} display="flex" alignItems="center" className={theme['year-container']}>
          <Heading2 marginBottom={3}>{currentYear}</Heading2>
          <DayPicker
            {...restProps}
            className={classNames}
            classNames={theme}
            numberOfMonths={12}
            pagedNavigation
            selectedDate={new Date(new Date().getFullYear(), 0, 1)}
            modifiers={convertModifiersToClassnames(modifiers, theme)}
            navbarElement={<FullNavigationBar size={size} />}
            weekdayElement={<WeekDay size={size} />}
            bordered="false"
          />
        </Box>
      </Box>
    );
  }
}

export default YearPicker;
