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
import { Section, Heading2 } from '../..';

class FullNavigationBar extends PureComponent {
  handlePreviousClick = () => {
    this.props.onPreviousClick();
    this.props.onClickPrevious();
  };

  handleNextClick = () => {
    this.props.onClickNext();
    this.props.onNextClick();
  };

  handleTodayClick = () => {
    this.props.onClickToday();
  };

  render() {
    const { className, month, size } = this.props;
    const year = month.getFullYear();

    return (
      <Section marginBottom={3}>
        <Box display="flex" alignItems="center">
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
          <Box display="flex" flex={1} justifyContent="flex-end">
            <Heading2>{year}</Heading2>
          </Box>
        </Box>
      </Section>
    );
  }
}

FullNavigationBar.propTypes = {
  className: PropTypes.string,
  onClickToday: PropTypes.func,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default FullNavigationBar;
