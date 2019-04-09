import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Button, ButtonGroup } from '../button';
import Section from '../section';
import { Heading2 } from '../typography';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

const PADDINGS = {
  small: 3,
  medium: 4,
  large: 5,
};

class FullNavigationBar extends PureComponent {
  handlePreviousClick = () => {
    this.props.onPreviousClick();
    this.props.onClickPrevious();
  };

  handleNextClick = () => {
    this.props.onNextClick();
    this.props.onClickNext();
  };

  handleTodayClick = () => {
    this.props.onClickToday();
  };

  render() {
    const { month, size } = this.props;
    const year = month.getFullYear();

    return (
      <Section padding={PADDINGS[size]} marginBottom={3}>
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
  /** The current active month. */
  month: PropTypes.PropTypes.instanceOf(Date),
  /** Callback function that is fired when there is clicked on a date. */
  onClickToday: PropTypes.func,
  /** Callback function that is fired when there is clicked on the next button. */
  onClickNext: PropTypes.func,
  /** Callback function that is fired when there is clicked on the previous button. */
  onClickPrevious: PropTypes.func,
  /** Callback function that is fired when there is clicked on the next button. */
  onNextClick: PropTypes.func,
  /** Callback function that is fired when there is clicked on the previous button. */
  onPreviousClick: PropTypes.func,
  /** The size wich controls the paddings. */
  size: PropTypes.oneOf(Object.keys(PADDINGS)),
};

FullNavigationBar.defaultProps = {
  size: 'medium',
};

export default FullNavigationBar;
