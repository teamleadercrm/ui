import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

class FullNavigationBar extends PureComponent {
  handlePreviousClick = () => {
    this.props.onPreviousClick();
  };

  handleNextClick = () => {
    this.props.onNextClick();
  };

  handleTodayClick = () => {
    this.props.onTodayClick();
  };

  render() {
    const { className, localeUtils, nextYear, previousYear, size } = this.props;
    /*
    const years = localeUtils.getYears();
    const previousYearButtonLabel = years[previousYear.getMonth()];
    const nextYearButtonLabel = years[nextYear.getMonth()];
    */
    return (
      <ButtonGroup segmented>
        <Button
          size={size}
          active={false}
          icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
          disabled={false}
          onClick={this.handlePreviousClick}
        />
        <Button size={size} onClick={this.handleTodayClick}>
          Today
        </Button>
        <Button
          size={size}
          active={false}
          icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
          disabled={false}
          onClick={this.handleNextClick}
        />
      </ButtonGroup>
    );
  }
}

FullNavigationBar.propTypes = {
  className: PropTypes.string,
  localeUtils: PropTypes.object,
  nextYear: PropTypes.instanceOf(Date),
  previousYear: PropTypes.instanceOf(Date),
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onTodayClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default FullNavigationBar;
