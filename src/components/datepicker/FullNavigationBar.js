import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Button, ButtonGroup } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';
import { Heading2, TextBody } from '../..';

class FullNavigationBar extends PureComponent {
  handlePreviousClick = () => {
    this.props.onPreviousClick();
  };

  handleNextClick = () => {
    this.props.onNextClick();
  };

  handleTodayClick = () => {
    this.props.handleClickToday();
  };

  render() {
    const { className, month, size } = this.props;
    const year = month.getFullYear();

    return (
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" flex={1}>
          <ButtonGroup segmented marginRight={3}>
            <Button
              size={size}
              active={false}
              icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
              disabled={false}
              onClick={this.handlePreviousClick}
            />
            <Button
              size={size}
              active={false}
              icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
              disabled={false}
              onClick={this.handleNextClick}
            />
          </ButtonGroup>
          <Button size={size} onClick={this.handleTodayClick}>
            Today
          </Button>
        </Box>
        <Heading2 flex={1}>{year}</Heading2>
        <Box>
          <TextBody>Week 1</TextBody>
        </Box>
      </Box>
    );
  }
}

FullNavigationBar.propTypes = {
  className: PropTypes.string,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default FullNavigationBar;
