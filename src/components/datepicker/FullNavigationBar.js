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
    const { className, month, size } = this.props;
    const year = month.getFullYear();

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
  localeUtils: PropTypes.object,
  nextYear: PropTypes.instanceOf(Date),
  previousYear: PropTypes.instanceOf(Date),
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onTodayClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default FullNavigationBar;
