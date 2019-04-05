import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { IconButton } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

class NavigationBar extends PureComponent {
  handlePreviousClick = () => {
    this.props.onPreviousClick();
  };

  handleNextClick = () => {
    this.props.onNextClick();
  };

  render() {
    const { className, localeUtils, nextYear, previousYear, size } = this.props;

    const years = localeUtils.getYears();
    const previousYearButtonLabel = years[previousYear.getMonth()];
    const nextYearButtonLabel = years[nextYear.getMonth()];

    return (
      <Box className={className} display="flex" justifyContent="space-between">
        <IconButton
          icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
          onClick={this.handlePreviousClick}
          title={previousYearButtonLabel}
        />
        <IconButton
          icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
          onClick={this.handleNextClick}
          title={nextYearButtonLabel}
        />
      </Box>
    );
  }
}

NavigationBar.propTypes = {
  className: PropTypes.string,
  localeUtils: PropTypes.object,
  nextYear: PropTypes.instanceOf(Date),
  previousYear: PropTypes.instanceOf(Date),
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default NavigationBar;
